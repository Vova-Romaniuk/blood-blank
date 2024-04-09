import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./pages";

const router = createBrowserRouter(routes);

function App() {
	return (
		<div className='w-full'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
