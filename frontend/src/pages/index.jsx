import MainPage from "./MainPage";
import Layout from "./components/Layout";
import AdminPanel from "./AdminPanel";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminPanel />,
	},
];
