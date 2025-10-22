import nodemailer from "nodemailer";
import * as yup from "yup";
import { NextResponse } from "next/server";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const runtime = "nodejs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(2, "Name is required")
      .max(120, "Name too long")
      .required(),
    phone: yup.string().trim().required(),
    // .matches(/^\d{10,15}$/, "") // only digits, 10–15 length
    // .test("is-valid-phone", "", (val) => {
    //   if (!val) return false;
    //   try {
    //     const parsed = parsePhoneNumberFromString("+" + val); // prepend "+" for parsing
    //     return !!parsed && parsed.isValid();
    //   } catch {
    //     return false;
    //   }
    // }),
    description: yup
      .string()
      .trim()
      .max(2000, "Description too long")
      .optional(),
    type: yup.string().required("Type is required"),
  })
  .required();

const escapeHtml = (s = "") =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const toText = ({ name, phone, type }) =>
  [
    `New ${type === "default" ? "Contact" : "Course"} Request`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
  ].join("\n");

const toHtml = ({ name, phone, description, type }) => `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#111">
    <h3 style="margin:0 0 10px 0;">New ${
      type === "default" ? "Contact" : "Course"
    } Request</h3>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tbody>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;width:160px;">Type</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(
            type === "default" ? "Contact" : "Course"
          )}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;width:160px;">Name</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(
            name
          )}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;">Phone</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(
            phone
          )}</td>
        </tr>
        ${
          description
            ? `<tr>
                 <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;vertical-align:top;">Description</td>
                 <td style="padding:8px 12px;border:1px solid #eee;white-space:pre-wrap;">${escapeHtml(
                   description
                 )}</td>
               </tr>`
            : ""
        }
      </tbody>
    </table>
  </div>
`;

export async function POST(req) {
  try {
    const json = await req.json();

    let data;
    try {
      data = await schema.validate(json, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (ve) {
      const details = ve?.inner?.map((i) => ({
        path: i.path,
        message: i.message,
      })) || [{ message: ve.message }];
      return new NextResponse(
        JSON.stringify({ ok: false, error: "Invalid input", details }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...CORS_HEADERS },
        }
      );
    }

    const { name, phone, description, type } = data;

    const senderAddress = process.env.REFERRAL_EMAIL_SENDER_ADDRESS;
    const senderAppPass = process.env.REFERRAL_EMAIL_SENDER_APP_PASS;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderAddress,
        pass: senderAppPass,
      },
    });

    const mailOptions = {
      from: senderAddress,
      to: senderAddress,
      subject: `New ${
        type === "default" ? "Contact" : "Course"
      } request: ${name}`,
      text: toText({ name, phone, type }),
      html: toHtml({ name, phone, description, type }),
      headers: { "X-Source": "Website Contact" },
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ ok: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      }
    );
  } catch (err) {
    console.error("Email error:", err);
    return new NextResponse(
      JSON.stringify({ ok: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      }
    );
  }
}
