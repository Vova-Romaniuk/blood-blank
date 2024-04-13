const NAV_MENU_ITEMS = [
	{ name: "Запис на донацію", link: "#registration-donation" },
	{ name: "Послуги", link: "#service" },
	{ name: "Контакти", link: "#contact-us" },
];

function Header() {
	return (
		<header className='h-[9vh] w-full z-30 flex absolute top-4 md:top-2 legt-0 bg-transparent'>
			<nav className='m-auto flex justify-between w-11/12'>
				<div className=''>
					<div className='flex'>
						<span className='text-5xl md:text-3xl text-white'>
							B
						</span>
						<div className='flex flex-col justify-between'>
							<span className='text-white text-base md:text-[10px] tracking-[10px] leading-3 md:tracking-[5px] h-fit'>
								ank
							</span>
							<span className='text-white text-base md:text-[10px] tracking-[10px] leading-3 md:tracking-[5px]'>
								lood
							</span>
						</div>
					</div>
				</div>
				<ul className='flex gap-3'>
					{NAV_MENU_ITEMS.map((item) => (
						<a href={item.link}>
							<li className='text-xl md:text-base cursor-pointer text-white'>
								{item.name}
							</li>
						</a>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
