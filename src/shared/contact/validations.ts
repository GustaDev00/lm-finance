import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("Name ist erforderlich"),
  phone: yup.string().required("Telefonnummer ist erforderlich"),
  email: yup.string().required("E-Mail ist erforderlich"),
  message: yup.string().required("Gewünschter Service ist erforderlich"),
});

export { validations };
