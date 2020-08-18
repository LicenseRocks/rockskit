import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  company: yup.string().required("Company is required"),
  address: yup.string().required("Address is required"),
  postCode: yup.string().required("Post code is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});
