import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

function Carousel() {
	return (
		<div className='md:h-[300px] h-[70vh] w-full' id='welcome'>
			<Swiper
				className='w-full h-full'
				autoplay={{
					delay: 20000,
				}}
				loop={true}
				modules={[Autoplay]}>
				<SwiperSlide>
					<div className='w-full md:h-[300px] h-[70vh] flex relative'>
						<img
							className='object-cover w-full h-full'
							src='https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410_1280.jpg'
							alt=''
						/>
						<div className='w-5/12 md:p-5 flex flex-col rounded-md absolute transform p-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  backdrop-blur-sm bg-white/30'>
							<span className='text-white text-3xl md:text-lg font-semibold mx-auto md:text-center'>
								Донорство крові в Україні
							</span>
							<Link className='mx-auto'>
								<button className='border-[1px] md:placeholder:text-base md:text-xs duration-200 hover:scale-110 mt-5 outline-0 font-medium text-xl p-4 md:p-2 rounded-md bg-transparent border-white cursor-pointer text-white'>
									Запис на донацію
								</button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carousel;
//
