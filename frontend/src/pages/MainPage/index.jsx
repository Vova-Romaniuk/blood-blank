import Carousel from "./components/Carousel";
import DonorInfo from "./components/DonorInfo";
import Services from "./components/Services";
import RegistrationToDonation from "./components/RegistrationToDotation";
import ContactUs from "./components/ContactUs";

function MainPage() {
	return (
		<div className='flex flex-col w-full'>
			<Carousel />
			<DonorInfo />
			<Services />
			<RegistrationToDonation />
			<ContactUs />
		</div>
	);
}

export default MainPage;
