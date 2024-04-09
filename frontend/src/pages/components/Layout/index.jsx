import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
function Layout() {
	return (
		<div className='w-full h-full flex flex-col'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
