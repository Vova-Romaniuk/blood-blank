import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
const center = [48.321345, 25.9339175];

function ContactUs() {
	return (
		<div
			className='w-full md:h-[500px] h-[300px] flex md:flex-col'
			id='contact-us'>
			<div className='w-6/12 md:w-full h-full flex'>
				<MapContainer center={center} zoom={10} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
				</MapContainer>
			</div>
			<div className='w-6/12 md:w-full h-full md:h-[200px] relative'>
				<img
					src='https://cdn.pixabay.com/photo/2018/02/28/15/17/red-blood-cells-3188223_1280.jpg'
					className='w-full h-full object-cover'
					alt=''
				/>
				<div className='bg-[#F08080]/70 absolute top-0 right-0 w-full h-full text-xl'>
					<div className='w-10/12 mx-auto mt-3 text-3xl md:text-lg text-white h-full justify-evenly flex flex-col text-extralight'>
						<div className='flex'>
							<i className='fa-solid fa-location-dot w-16 md:w-10'></i>
							<span className='font-light'>
								місто Чернівці, вулиця головна 521
							</span>
						</div>
						<div className='flex'>
							<i className='fa-solid fa-phone w-16'></i>
							<div className='flex flex-col gap-4'>
								<span>+380 (97) 435 66 41</span>
								<span>+380 (50) 498 52 14</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
