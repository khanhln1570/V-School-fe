import {
  required,
  helpers,
  minValue,
  maxLength,
  email
} from "vuelidate/lib/validators";

const regexNumber = /^[a-zA-Z0-9-]*$/;
const number = (val) => {
  if (val.charAt(0) === '-' || val.slice(-1) === '-') return false;
  const test = regexNumber.test(val);
  if (!test) return false;

  return true;
}

const testValidate = {
  email: {
    required,
    email
  },
  password: {
    required,
  },
}

export default testValidate;