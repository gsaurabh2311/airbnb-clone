import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required().min(3).max(50),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(30),
    password_confirmation: yup.string().oneOf([yup.ref("password")], "Confirm password not matched").required(),
  }).required();

  export type RegisterType = yup.InferType<typeof registerSchema>