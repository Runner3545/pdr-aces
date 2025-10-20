import * as yup from "yup";
import { texts } from "@/constants";

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, texts.contact.nameMin)
    .required(texts.contact.nameRequired),
  email: yup
    .string()
    .trim()
    .email(texts.contact.emailInvalid)
    .required(texts.contact.emailRequired),
  description: yup.string().trim().max(1000, texts.contact.descriptionTooLong),
});

export default contactSchema;
