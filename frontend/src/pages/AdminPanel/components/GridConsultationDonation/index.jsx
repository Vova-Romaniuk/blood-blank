import { apiClient } from "../../../../apiClient";
function GridConsultationDonation({
	registrationConsultation,
	type,
	setRegistrationConsultation,
}) {
	const handleToggle = async (itemId) => {
		setRegistrationConsultation((prevState) => {
			console.log(prevState);
			const targetIndex = prevState.findIndex(
				(obj) => obj._id === itemId
			);
			if (targetIndex !== -1) {
				return prevState.map((obj, index) => {
					if (index === targetIndex) {
						return { ...obj, isHandled: !obj.isHandled };
					} else {
						return obj;
					}
				});
			} else {
				return prevState;
			}
		});
		try {
			await apiClient.put("consultations", { id: itemId });
		} catch (error) {}
	};
	const handleDelete = async (itemId) => {
		setRegistrationConsultation((prevState) => {
			const updatedState = prevState.filter((obj) => obj._id !== itemId);
			if (updatedState.length === prevState.length) {
				console.log("Object with targetId not found.");
			}
			return updatedState;
		});
		try {
			await apiClient.delete(`consultations/${itemId}`);
		} catch (error) {}
	};
	return (
		<div className='w-11/12 mx-auto '>
			<div className='w-full'>
				<span className='text-2xl w-full text-center'>
					{type === "new"
						? "Нові запити"
						: type === "processed" && "Оброблені запити"}
				</span>
			</div>
			<div className='grid-consultation w-full border-y-[1px]'>
				<span className='border-x-[1px] p-2'>ПІБ</span>
				<span className='p-2'>Номер телефону</span>
				<div className='border-x-[1px] p-2'></div>
			</div>
			<div className='flex flex-col w-full'>
				{registrationConsultation?.map((item) => (
					<div className='grid-consultation w-full border-y-[1px]'>
						<span className='border-x-[1px] p-2 overflow-x-auto'>
							{item.fullName}
						</span>
						<span className='p-2 overflow-x-auto'>
							{item.phone}
						</span>
						<div className='border-x-[1px] p-2 flex justify-evenly'>
							{type === "new" ? (
								<button
									onClick={() => {
										handleToggle(item._id);
									}}
									className='border text-sm p-3 cursor-pointer duration-200 hover:bg-slate-200'>
									Позначати як обролене
								</button>
							) : (
								type === "processed" && (
									<button
										onClick={() => {
											handleToggle(item._id);
										}}
										className='border text-sm p-3 cursor-pointer duration-200 hover:bg-slate-200'>
										Позначати як нове
									</button>
								)
							)}
							<button
								onClick={() => {
									handleDelete(item._id);
								}}
								className='hover:scale-110 hover:text-red-700 duration-300'>
								<i className='fa-solid fa-trash '></i>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GridConsultationDonation;
