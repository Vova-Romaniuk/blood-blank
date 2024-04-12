import * as Yup from "yup";

export const consultationsValidationSchema = Yup.object({
	phone: Yup.string()
		.required("Поле є обов'язковим для заповнення")
		.length(10, "Довжина вашого номеру має бути 10 цифер"),
	fullName: Yup.string().required("Поле є обов'язковим для заповнення"),
});
