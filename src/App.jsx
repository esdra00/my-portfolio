import {RouterProvider, createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/404/404Page";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectDetail from "./pages/Project Detail/projectDetail";
import ProjectsPage from "./pages/Projects Page/ProjectsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{path: "/", element: <HomePage />},
			{path: "projectsPage", element: <ProjectsPage />},
			{path: "detail/:id", element: <ProjectDetail />},
			{path: "contactPage", element: <ContactPage />},
			{path: "*", element: <ErrorPage />},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
