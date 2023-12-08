import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Login from "../src/pages/Login.jsx";
import Single from "../src/pages/Single.jsx";
import New from "../src/pages/New.jsx";
import Home from "../src/pages/Home.jsx";
import List from "../src/pages/List.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { productInputs, userInputs } from "./formSource.js";

function App() {
	const Layout = () => {
		return (
			<div>
				<Navbar />

				<div className='flex relative'>
					<span className='bg-[#f5f5f5] w-[15%] sticky top-8 left-0'>
						<Sidebar />
					</span>
					<span className='bg-[#f8f9fa] w-[85%]'>
						<Outlet />
					</span>
				</div>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/users",
					element: <List />,
				},
				{
					path: "/users/:userId",
					element: <Single />,
				},
				{
					path: "/users/new",
					element: <New inputs={userInputs} />,
					title: "Add New User",
				},
				{
					path: "/products",
					element: <List />,
				},
				{
					path: "/products/:productId",
					element: <Single />,
				},
				{
					path: "/products/new",
					element: <New inputs={productInputs} />,
					title: "Add New Product",
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
