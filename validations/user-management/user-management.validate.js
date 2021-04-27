import {
  required,
  helpers,
  minValue,
  maxLength,
  minLength,
  email
} from "vuelidate/lib/validators";

const phoneNumber = (val) => {
	if (val) {
		if (val.slice(0, 1) !== '0') return false;
		const phoneRegex = /^[0-9]*$/;
		// const phoneWithoutCode = val.replace('+60', '');
		const test = phoneRegex.test(val);
		if (!test) return false;
		if (val.length > 16 || val.length < 10) return false;
		return true;
	}
	return false;
}

export const newAdmin = {
  name: {
    required,
  },
  mobile: {
    required
  },
  email: {
    required,
    email
  },
  password: {
    required,
    password: minLength(8),
  }
}

export const newSupervisor = {
  name: {
    required,
  },
  password: {
    required,
    password: minLength(8),
  },
  mobile: {
    required,
    phoneNumber
  }
}