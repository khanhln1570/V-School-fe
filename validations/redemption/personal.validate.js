import {
	required,
	email
} from "vuelidate/lib/validators";

const nircNumber = /^[0-9]*$/;

const validNric = (val) => {
	const test = nircNumber.test(val);
	
	if (!test) return false;
	
	if (val.length !== 12) return false;

	return true;
}

const minAge = (val) => {
	const age = val.slice(0, 2);
	if (age < 21) return false;

	return true;
}

const phoneNumber = (val) => {
	// if (val.slice(0, 3) !== '+60') return false;
	// const phoneRegex = /^[0-9]*$/;
	// const phoneWithoutCode = val.replace('+60', '');
	// const test = phoneRegex.test(phoneWithoutCode);
	// if (!test) return false;
	if (val.length > 16 || val.length < 10) return false;
	return true;
}


const personalValidate = {
	fullname:  {
		required,
	},
	nric:  {
		required,
	},
	address: {
		required,
	},
	email: {
		required,
		email
	},
	mobile: {
		required,
		phoneNumber
	},
}

export default personalValidate;