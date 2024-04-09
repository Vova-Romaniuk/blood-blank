import MainPage from "./MainPage";
import Layout from "./components/Layout";

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
];
