import * as yup from "yup";

export const signUserValid = yup.object().shape({
  taiKhoan: yup.string().required("(*) Account is Required"),
  matKhau: yup.string().required("(*) Password is Required"),
  hoTen: yup.string().required("(*) User Name is Required"),
  soDT: yup
    .string()
    .required("(*) Phone is Required")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("(*) Model is Required"),
  email: yup
    .string()
    .required("(*) Email is Required")
    .email("(*) Email is Required"),
});
