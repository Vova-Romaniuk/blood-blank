import Input from "../../../components/Input";
import CustomDatePicker from "../../../components/CustomDatePicker";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../../../apiClient";
import { registrationValidationSchema } from "../../../../validations/registration-donation.schema";

function RegistrationToDonation() {
	const initialValues = {
		phone: "",
		fullName: "",
		birthday: "",
		donationDate: "",
		isHandled: false,
	};

	const createRegistrationDonation = async (values) => {
		try {
			await apiClient.post("registration-donation", values);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='w-10/12 h-[450px] mx-auto mt-10'>
			<p className='text-3xl italic mb-5 font-medium text-center text-[#F08080]'>
				Запис на донацію
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={registrationValidationSchema}
				onSubmit={createRegistrationDonation}>
				{({ values }) => (
					<Form className='flex flex-col w-7/12 h-5/6 mx-auto my-7 justify-evenly !text-[#F08080]'>
						<div className='flex flex-col'>
							<Field
								id='fullName'
								name='fullName'
								placeholder='ПІБ'
								className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
							/>
							<ErrorMessage
								className='text-red-600 text-xs'
								name='fullName'
								component='span'
							/>
						</div>
						<div className='flex flex-col'>
							<Field
								name='birthday'
								id='birthday'
								value={values.birthday}
								placeholderText='Дата народження'
								as={CustomDatePicker}
							/>
							<ErrorMessage
								className='text-red-600 text-xs'
								name='birthday'
								component='span'
							/>
						</div>
						<div className='flex flex-col'>
							<Field
								name='donationDate'
								placeholderText='Дата та час донації'
								isTimeIntervals
								id='donationDate'
								disabledDaysAndTimes={[
									{
										day: new Date(2024, 3, 10),
										times: [
											"9:00",
											"12:00",
											"10:30",
											"7:00",
										],
									},
									{
										day: new Date(2024, 3, 11),
										times: [
											"9:00",
											"12:00",
											"10:30",
											"7:00",
										],
									},
								]}
								as={CustomDatePicker}
							/>
							<ErrorMessage
								className='text-red-600 text-xs'
								name='donationDate'
								component='span'
							/>
						</div>
						<div className='flex flex-col'>
							<Field
								name='phone'
								placeholder='Номер телефону'
								className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
								id='phone'
							/>
							<ErrorMessage
								className='text-red-600 text-xs'
								name='phone'
								component='span'
							/>
						</div>
						<button
							type='submit'
							className='bg-[#F08080] !border-none duration-200 !outline-none rounded-md h-10 px-4 text-lg cursor-pointer text-white hover:bg-[#c96363] my-5'>
							Записатись
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default RegistrationToDonation;
