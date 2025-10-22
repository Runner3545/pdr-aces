import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { texts } from "@/constants";

export default yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, texts.contact.nameMin)
    .required(texts.contact.nameRequired),

  phone: yup
    .string()
    .required(texts.contact.phoneRequired)
    .transform((v) => (v ? String(v).replace(/\D+/g, "") : v))
    .matches(/^\d{10,15}$/, texts.contact.phoneInvalid),

  description: yup.string().trim().max(2000, texts.contact.descriptionTooLong),
});
