import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../../../apiClient";
import { consultationsValidationSchema } from "../../../../validations/consultations.schema";

function Services() {
	const initialValues = {
		phone: "",
		fullName: "",
		isHandled: false,
	};
	const createConsultations = async (values) => {
		try {
			await apiClient.post("consultations", values);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='w-full flex h-[400px]'>
			<div className='w-6/12 relative'>
				<img
					src='https://cdn.pixabay.com/photo/2019/06/06/19/22/red-blood-cells-4256710_640.jpg'
					className='w-full h-full object-cover'
					alt=''
				/>
				<div className='bg-[#F08080]/70 absolute top-0 right-0 w-full h-full'>
					<p className='text-2xl flex flex-col text-white text-center mt-3'>
						Наші послуги
					</p>
					<div className='w-10/12 mx-auto mt-3 text-white'>
						<ul className='list-disc text-lg gap-4 flex flex-col'>
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
			<div className='w-6/12 flex flex-col h-full border-y-2 border-[#F08080]'>
				<p className='mt-5 text-center text-2xl font-medium text-[#F08080]'>
					Хочете кваліфіковану консультацію?
				</p>
				<Formik
					initialValues={initialValues}
					validationSchema={consultationsValidationSchema}
					onSubmit={createConsultations}>
					{({ values }) => (
						<Form className='m-auto flex flex-col w-5/12 gap-3'>
							<div className='flex flex-col'>
								<Field
									id='fullName'
									name='fullName'
									placeholder='Введіть ПІБ'
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
									id='phone'
									name='phone'
									placeholder='Введіть номер телефону'
									className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
								/>
								<ErrorMessage
									className='text-red-600 text-xs'
									name='phone'
									component='span'
								/>
							</div>

							<button
								type='submit'
								className='bg-[#F08080] !border-none duration-200 !outline-none rounded-md h-10 px-4 text-lg cursor-pointer text-white hover:bg-[#c96363]'>
								Надіслати
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Services;
