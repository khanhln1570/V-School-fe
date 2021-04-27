import {
  required,
  helpers,
  minValue,
  maxLength,
  minLength,
  email
} from "vuelidate/lib/validators";

const testValidate = {
  name: {
    required,
  },
  email: {
    required,
    email
  },
  password: {
    required,
    password: minLength(8),
  },
  note: {
    required,
  },
  mobile: {
    required
  }
}

export default testValidate;