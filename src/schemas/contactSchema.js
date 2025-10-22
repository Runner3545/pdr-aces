import * as yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";
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
    .test(
      "is-valid-phone",
      texts.contact.phoneInvalid,
      (val) => !!val && isValidPhoneNumber(val)
    ),
  description: yup.string().trim().max(1000, texts.contact.descriptionTooLong),
});
