import {
	required,
  helpers,
  minValue,
  maxLength,
} from "vuelidate/lib/validators";

const regexNumber = /^[a-zA-Z0-9-]*$/;
const number = (val) => {
	if (val.charAt(0) === '-' || val.slice(-1) === '-') return false;
	const test = regexNumber.test(val);
	if (!test) return false;

	return true;
}

const purchaseValidate = {
	amount: {
		required,
		minAmount: minValue(0),
		maxLengthAmount: maxLength(20)
	},
	dateOfPurchase: {
		required,
	},
	receiptNumber: {
		required,
		number,
		maxLengthReceipt: maxLength(30),
	},
}

export default purchaseValidate;