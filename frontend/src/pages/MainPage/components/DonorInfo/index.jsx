import { useEffect, useState } from "react";

function DonorInfo() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 350) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className='w-full flex my-5 relative'>
			<div className='w-9/12 mx-auto text-red-800'>
				<p className='text-3xl md:text-xl italic mb-5 font-medium text-center'>
					Хто може стати донором та чому це важливо?
				</p>
				<div className='text-lg md:text-sm text-justify indent-16 font-medium tracking-wider'>
					<p className=''>
						В умовах війни донорство крові набуло особливого сенсу і
						значення. Адже донорська кров дозволяє рятувати життя як
						військових, так і цивільних в той час, коли на фронті
						тривають бойові дії, а росіяни продовжують тероризувати
						обстрілами українські міста і села.
					</p>
					<p>
						У межах кампанії «Твоя кров може воювати. Стань
						донором!», до якої вже долучилися тисячі українців,
						продовжуємо розповідати про відповідальне донорство і
						відповідати на найпоширеніші питання.
					</p>
					<p>
						Донором крові та/або компонентів крові може бути
						будь-який дієздатний громадянин України віком від 18
						років, іноземець чи особа без громадянства, яка має
						посвідку на постійне проживання на території України,
						які пройшли відповідне медичне обстеження і в яких немає
						протипоказань, визначених Міністерством охорони здоров’я
						України.{" "}
						<a
							href='https://moz.gov.ua/article/news/hto-mozhe-buti-donorom-krovi-'
							className='italic underline cursor pointer'
							target='_blank'>
							Детальніше{" "}
						</a>
					</p>
				</div>
			</div>
			{isScrolled && (
				<a href='#welcome'>
					<div className='fixed md:right-2 right-8 z-50 bottom-20 max-sm:right-6 max-sm:bottom-28 animate-pulse w-12 h-12 flex rounded-full bg-red-900'>
						<i className='fa-solid fa-angle-up text-4xl text-white  cursor-pointer m-auto'></i>
					</div>
				</a>
			)}
		</div>
	);
}

export default DonorInfo;
