const NAV_MENU_ITEMS = ["Запис на донацію", "Донорам", "Послуги", "Контакти"];

function Header() {
	return (
		<header className='h-[9vh] w-full z-30 flex absolute top-4 legt-0 bg-transparent'>
			<nav className='m-auto flex justify-between w-10/12'>
				<div className=''>
					<div className='flex'>
						<span className='text-5xl text-white'>B</span>
						<div className='flex flex-col justify-between'>
							<span className='text-white text-base tracking-[10px] h-fit'>
								ank
							</span>
							<span className='text-white text-base tracking-[10px]'>
								lood
							</span>
						</div>
					</div>
				</div>
				<ul className='flex gap-5'>
					{NAV_MENU_ITEMS.map((item) => (
						<li className='text-xl cursor-pointer text-white'>
							{item}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
