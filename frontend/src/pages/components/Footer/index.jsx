function Footer() {
	return (
		<footer className='w-full h-[70px] flex justify-evenly items-center text-white bg-[#964e4e]'>
			<div className='flex w-7/12 md:w-6/12 justify-between md:justify-evenly'>
				<span className='[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:scale-150 text-xl duration-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 448 512'>
						<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
					</svg>
				</span>
				<span className='[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:scale-150 text-xl duration-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 448 512'>
						<path d='M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z' />
					</svg>
				</span>
				<span className='[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:scale-150 text-xl duration-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 320 512'>
						<path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
					</svg>
				</span>
			</div>
			<span className='underline font-medium md:w-6/12 md:text-xs md:mr-2'>
				© Усі права захищені 2024
			</span>
		</footer>
	);
}

export default Footer;
