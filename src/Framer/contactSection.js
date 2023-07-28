import { easeInOut } from "framer-motion";

export const container = {
	inView: {
		transition: {
			staggerChildren: 0.15,
         ease: easeInOut
		},
	},
};

export const text = {
	initial: {
		y: 40,
		opacity: 0,
	},
	inView: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.8},
	},
};
