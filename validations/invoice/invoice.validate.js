import {
	required,
} from "vuelidate/lib/validators";

const phoneNumber = (val) => {
	// if (val.slice(0, 3) !== '+60') return false;
	// const phoneRegex = /^[0-9]*$/;
	// const phoneWithoutCode = val.replace('+60', '');
	// const test = phoneRegex.test(phoneWithoutCode);
	// if (!test) return false;
	if (val.length > 16 || val.length < 10) return false;
	return true;
}

export const bhyt = {
  BHYT: {
    required,
  },
};