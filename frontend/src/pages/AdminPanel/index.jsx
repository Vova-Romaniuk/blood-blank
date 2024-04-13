import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { apiClient } from "../../apiClient";
import GridRegistrarionDonation from "./components/GridRegistrationDonation";
import GridConsultationDonation from "./components/GridConsultationDonation";
import SpinnerWrapper from "../components/SpinnerWrapper";

function AdminPanel() {
	const [isAdmin, setIsAdmin] = useState(
		localStorage.getItem("user") ? true : false
	);
	const [isLoading, setIsLoading] = useState(true);
	const [registrationDonation, setRegistrationDonation] = useState([]);
	const [registrationDonationSorted, setRegistrationDonationSorted] =
		useState([]);
	const [type, setType] = useState("new");
	const [registrationConsultation, setRegistrationConsultation] = useState(
		[]
	);
	const [registrationConsultationSorted, setRegistrationConsultationSorted] =
		useState([]);
	const [tab, setTab] = useState("donation");
	const initialValues = {
		email: "",
		password: "",
	};
	const fetchRegistrationDonation = async () => {
		try {
			setIsLoading(true);
			const responce = await apiClient.get("registration-donation");
			setRegistrationDonation(responce.data);
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};
	const fetchRegistrationConsultation = async () => {
		try {
			setIsLoading(true);
			const responce = await apiClient.get("consultations");
			setRegistrationConsultation(responce.data);
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchRegistrationDonation();
		fetchRegistrationConsultation();
	}, []);

	const signIn = async (values) => {
		try {
			const responce = await apiClient.post("auth", values);
			setIsAdmin(responce.data);
			localStorage.setItem("user", JSON.stringify(responce.data._id));
		} catch (error) {
			console.log(error);
		}
	};

	const sortedRegistration = (bool) => {
		setRegistrationDonationSorted(
			registrationDonation.filter((item) => !bool)
		);
	};

	const sortedConsultations = (bool) => {
		setConsultationsSorted(
			registrationConsultation.filter((item) => !item.isHandled)
		);
	};

	useEffect(() => {
		if (type === "new") {
			setRegistrationDonationSorted(
				registrationDonation.filter((item) => !item.isHandled)
			);
			setRegistrationConsultationSorted(
				registrationConsultation.filter((item) => !item.isHandled)
			);
		}
		if (type === "processed") {
			setRegistrationDonationSorted(
				registrationDonation.filter((item) => item.isHandled)
			);
			setRegistrationConsultationSorted(
				registrationConsultation.filter((item) => item.isHandled)
			);
		}
	}, [type, registrationDonation, registrationConsultation]);

	const renderGrid = () => {
		switch (tab) {
			case "donation":
				return (
					<GridRegistrarionDonation
						registrationDonation={registrationDonationSorted}
						setRegistrationDonation={setRegistrationDonation}
						type={type}
					/>
				);
			case "consultation":
				return (
					<GridConsultationDonation
						registrationConsultation={
							registrationConsultationSorted
						}
						setRegistrationConsultation={
							setRegistrationConsultation
						}
						type={type}
					/>
				);
			default:
				return <></>;
		}
	};

	return (
		<div className='min-h-[100vh] flex w-full'>
			{isAdmin ? (
				<div className='flex flex-col w-full'>
					<div className='h-[50px] w-full flex border-b-2 border'>
						<div className='w-10/12 text-4xl m-auto flex justify-between '>
							<span>
								Ласкаво просимо до панелі адміністратора
							</span>
							<button>
								<i className='fa-solid fa-right-from-bracket'></i>
							</button>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='h-[40px] text-2xl flex w-full mx-auto border-b'>
							<div
								onClick={() => setTab("donation")}
								className={`w-6/12 text-center mx-auto cursor-pointer ${
									tab === "donation" && "bg-slate-200"
								}`}>
								<span>Записи на донацію</span>
							</div>
							<div
								onClick={() => setTab("consultation")}
								className={`w-6/12 text-center mx-auto border-l-2 cursor-pointer ${
									tab === "consultation" && "bg-slate-200"
								}`}>
								<span> Записи на консультацію</span>
							</div>
						</div>
						<div className='h-[30px] w-10/12 mx-auto flex flex-end'>
							<select
								value={type}
								onChange={(e) => {
									setType(e.target.value);
								}}
								name=''
								id=''
								className='ml-auto mr-0'>
								<option value='processed'>Оброблені</option>
								<option value='new'>Нові</option>
							</select>
						</div>
						{isLoading ? (
							<div className='w-full h-[200[px] flex'>
								<SpinnerWrapper />
							</div>
						) : (
							renderGrid()
						)}
					</div>
				</div>
			) : (
				<Formik
					className='m-auto'
					initialValues={initialValues}
					onSubmit={signIn}>
					{({ values }) => (
						<Form className='m-auto flex flex-col w-5/12 md:w-8/12 gap-3'>
							<div className='flex flex-col'>
								<Field
									id='email'
									name='email'
									placeholder='Введіть Email'
									className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
								/>
							</div>
							<div className='flex flex-col'>
								<Field
									type='password'
									id='password'
									name='password'
									placeholder='Введіть пароль'
									className={`bg-white text-red-700 h-10 border-[#F08080] border-[1px] md:text-base md:placeholder:text-base rounded-md pl-3 focus:outline-none focus:border-[#F08080] focus:border-2 placeholder:text-[#f2a0a0]`}
								/>
							</div>

							<button
								type='submit'
								className='bg-[#F08080] !border-none duration-200 !outline-none rounded-md h-10 disabled:cursor-not-allowed px-4 text-lg cursor-pointer text-white hover:bg-[#c96363] my-5'>
								Ввійти
							</button>
						</Form>
					)}
				</Formik>
			)}
		</div>
	);
}

export default AdminPanel;
