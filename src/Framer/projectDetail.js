import { easeInOut } from "framer-motion";

export const container = {
	animate: {
		transition: {
			staggerChildren: 0.3,
			ease: easeInOut,
		},
	},
};

export const fadeUp = {
	initial: {y: 30, opacity: 0},
	animate: {y: 0, opacity: 1, transition: {duration: 1}},
};
