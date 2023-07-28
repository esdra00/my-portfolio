export const headerAnimation = {
	hidden: {
		// y: -100,
		// opacity: 0,
		y: window.innerWidth > 425 ? -100 : 0,
		opacity: window.innerWidth > 425 ? 0 : 1,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
};

export const socialsAnimation = {
	hidden: {x: -100, opacity: 0},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
};
