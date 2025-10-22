import nodemailer from "nodemailer";
import * as yup from "yup";
import { NextResponse } from "next/server";
import {
  parsePhoneNumberFromString,
  isValidPhoneNumber,
} from "libphonenumber-js";

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
    title: yup
      .string()
      .trim()
      .min(1, "Title is required")
      .max(120, "Title too long")
      .required(),
    phone: yup
      .string()
      .trim()
      .required("Phone is required")
      .test(
        "is-valid-phone",
        "Phone is invalid",
        (v) => !!v && isValidPhoneNumber(v)
      ),
    description: yup
      .string()
      .trim()
      .max(2000, "Description too long")
      .optional(),
  })
  .required();

const escapeHtml = (s = "") =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const toText = ({ title, phone, country }) =>
  [
    `New Contact Request`,
    ``,
    `Title: ${title}`,
    `Phone: ${phone}`,
    `Country: ${country || "Unknown"}`,
  ].join("\n");

const toHtml = ({ title, phone, description, country }) => `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#111">
    <h3 style="margin:0 0 10px 0;">New Contact Request</h3>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tbody>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;width:160px;">Title</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(
            title
          )}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;">Phone</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(
            phone
          )}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#f8fafc;">Country</td>
          <td style="padding:8px 12px;border:1px solid #eee;">${
            country || "Unknown"
          }</td>
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

    const { title, phone, description } = data;

    let country = null;
    try {
      const parsed = parsePhoneNumberFromString(phone);
      if (parsed) country = parsed.country || null;
    } catch {}

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
      subject: `New Contact: ${title}`,
      text: toText({ title, phone, country }),
      html: toHtml({ title, phone, description, country }),
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
