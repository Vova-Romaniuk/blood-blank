import { useState, useEffect } from "react";
import CustomDatePicker from "../../../components/CustomDatePicker";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../../../apiClient";
import { registrationValidationSchema } from "../../../../validations/registration-donation.schema";

function RegistrationToDonation() {
	const [sortedDates, setSortedDates] = useState([]);
	const [isRegistered, setIsRegistered] = useState(false);
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

	const fetchSortedDates = async () => {
		try {
			const responce = await apiClient.get("registration-donation/sort");
			const { data } = responce;
			const newData = data.map((item) => ({
				...item,
				day: new Date(item.day),
			}));
			setSortedDates(newData);
			setIsRegistered(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchSortedDates();
	}, []);

	return (
		<div
			className='w-10/12 md:w-full h-[450px] mx-auto mt-10'
			id='registration-donation'>
			<p className='text-3xl md:text-xl italic mb-5 md:mb-3 font-medium text-center text-[#F08080]'>
				Запис на донацію
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={registrationValidationSchema}
				onSubmit={createRegistrationDonation}>
				{({ values }) => (
					<Form className='flex flex-col md:w-8/12 w-7/12 h-5/6 mx-auto my-7 md:my-3 justify-evenly !text-[#F08080]'>
						<div className='flex flex-col'>
							<Field
								id='fullName'
								name='fullName'
								placeholder='ПІБ'
								className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
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
								disabledDaysAndTimes={sortedDates}
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
								className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
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
							disabled={isRegistered}
							className='bg-[#F08080] !border-none duration-200 !outline-none rounded-md h-10 disabled:cursor-not-allowed px-4 text-lg cursor-pointer text-white hover:bg-[#c96363] my-5'>
							{isRegistered ? "Вас записано" : "Записатись"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default RegistrationToDonation;
