import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../../../apiClient";
import { consultationsValidationSchema } from "../../../../validations/consultations.schema";

function Services() {
	const initialValues = {
		phone: "",
		fullName: "",
		isHandled: false,
	};
	const [isRegistered, setIsRegistered] = useState(false);
	const createConsultations = async (values) => {
		try {
			await apiClient.post("consultations", values);
			setIsRegistered(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className='w-full flex md:h-[700px] h-[400px] md:flex-col-reverse'
			id='service'>
			<div className='w-6/12 md:w-full md:h-[350px] h-full relative'>
				<img
					src='https://cdn.pixabay.com/photo/2019/06/06/19/22/red-blood-cells-4256710_640.jpg'
					className='w-full h-full object-cover'
					alt=''
				/>
				<div className='bg-[#F08080]/70 absolute top-0 right-0 w-full h-full md:h-full'>
					<p className='text-2xl flex flex-col md:text-xl text-white text-center mt-3'>
						Наші послуги
					</p>
					<div className='w-10/12 mx-auto mt-3 text-white'>
						<ul className='list-disc text-lg gap-3 md:text-sm flex flex-col'>
							<li>
								Швидка та якісна здача крові. Без шкоди для
								вашого організму. З кваліфікованими лікарями.
							</li>
							<li>
								Повний чек-ап організму при першому відвідуванні
								нашого банку.
							</li>
							<li>
								Підтримка спільноти. Ми цінуємо кожного клієнта.
								Тому ми запровадили програму лояльності, яка
								дозволяє збирати бонуси від партнерів нашого
								банку.
							</li>
							<li>
								Оплата за вашу кров. Та реферальна програма.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='w-6/12 md:w-full flex flex-col h-full border-y-2 border-[#F08080]'>
				<p className='mt-5 text-center md:text-xl text-2xl font-medium text-[#F08080]'>
					Хочете кваліфіковану консультацію?
				</p>
				<Formik
					initialValues={initialValues}
					validationSchema={consultationsValidationSchema}
					onSubmit={createConsultations}>
					{({ values }) => (
						<Form className='m-auto flex flex-col w-5/12 md:w-8/12 gap-3'>
							<div className='flex flex-col'>
								<Field
									id='fullName'
									name='fullName'
									placeholder='Введіть ПІБ'
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
									id='phone'
									name='phone'
									placeholder='Введіть номер телефону'
									className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
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
								{isRegistered ? "Вас записано" : "Надіслати"}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Services;
