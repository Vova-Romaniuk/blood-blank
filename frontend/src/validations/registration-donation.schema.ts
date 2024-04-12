import * as Yup from "yup";

const isEighteenOrOlder = (value) => {
	const birthday = new Date(value);
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear();

	return age >= 18;
};

export const registrationValidationSchema = Yup.object({
	phone: Yup.string()
		.required("Поле є обов'язковим для заповнення")
		.length(10, "Довжина вашого номеру має бути 10 цифер"),
	fullName: Yup.string().required("Поле є обов'язковим для заповнення"),
	birthday: Yup.string()
		.required("Поле є обов'язковим для заповнення")
		.test(
			"is-eighteen-or-older",
			"Вам має бути 18 років",
			isEighteenOrOlder
		),
	donationDate: Yup.string().required("Поле є обов'язковим для заповнення"),
});
