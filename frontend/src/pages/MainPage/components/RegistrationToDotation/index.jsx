import Input from "../../../components/Input";
import CustomDatePicker from "../../../components/CustomDatePicker";
function RegistrationToDonation() {
	return (
		<div className='w-10/12 h-[400px] mx-auto mt-10'>
			<p className='text-3xl italic mb-5 font-medium text-center text-[#F08080]'>
				Запис на донацію
			</p>
			<div className='flex flex-col w-7/12 mx-auto my-7 !text-[#F08080]'>
				<Input className='mb-7' placeholder='ПІБ' />
				<CustomDatePicker placeholderText='Дата народження' />
				<CustomDatePicker
					className='my-7'
					placeholderText='Дата та час донації'
					isTimeIntervals
					disabledDaysAndTimes={[
						{
							day: new Date(2024, 3, 10),
							times: ["9:00", "12:00", "10:30", "7:00"],
						},
						{
							day: new Date(2024, 3, 11),
							times: ["9:00", "12:00", "10:30", "7:00"],
						},
					]}
				/>
				<Input placeholder='Номер телефону' />
				<button className='bg-[#F08080] !border-none duration-200 !outline-none rounded-md h-10 px-4 text-lg cursor-pointer text-white hover:bg-[#c96363] my-7'>
					Записатись
				</button>
			</div>
		</div>
	);
}

export default RegistrationToDonation;
