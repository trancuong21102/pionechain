import * as yup from "yup";

export const schemaCreate = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("content is required"),
});

export const schemaContactPartner = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),

  title: yup.string().required("Title is required"),

  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  phone_number: yup
    .string()
    .matches(/^[0-9]{8,15}$/, "Invalid phone number")
    .required("Phone number is required"),

  organization_name: yup.string().required("Organization name is required"),
  organization_location: yup.string().required("Organization location is required"),
  industry: yup.string().required("Industry is required"),
  organization_size: yup.string().required("Organization size is required"),

  field_id: yup
    .array()
    .of(yup.number().required())
    .min(1, "Select at least one field")
    .required("Field ID is required"),

  message: yup.string().required("Message is required"),
});
