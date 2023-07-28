import {LazyMotion} from "framer-motion";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Socials from "../components/Layout/Socials/Socials";
import Loader from "./Loader/Loader";

const loadFeatures = () => import("/src/Framer/features.js").then((res) => res.default);

export default function Layout() {
	const [loading, setLoading] = useState(true);

	// WITH PROMISE
	// useEffect(() => {
	// 	// Loading function to load data or
	// 	// fake it using setTimeout;
	// 	const loadData = async () => {
	// 		// Wait for two second
	// 		await new Promise((r) => setTimeout(r, 1000));
	// 		console.log("done promise");
	// 		// Toggle loading state
	// 		setLoading((loading) => !loading);
	// 	};

	// 	loadData();
	// }, []);

	// WITHOUT PROMISE
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return <Loader />;
	} else {
		return (
			<LazyMotion features={loadFeatures} strict>
				<Header />
				<Socials />
				<Outlet />
			</LazyMotion>
		);
	}
}
