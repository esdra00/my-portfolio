import {easeInOut} from "framer-motion";

export const layout = {
	animate: {
		transition: {
			staggerChildren: 0.2,
			ease: easeInOut,
		},
	},
};

export const title = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {duration: 1},
	},
};

export const content = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {duration: 0.5},
	},
};

export const card = {
	// initial: {
	// 	opacity: 0,
	// 	y: 10,
	// },
	// animate: {
	// 	opacity: 1,
	// 	y: 0,
	// 	transition: {duration: 1, delay: 1},
	// },
};
