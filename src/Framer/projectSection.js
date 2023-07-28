export const Image =
	window.innerWidth > 768
		? {
				initial: {x: 50},
				inView: {
					x: 0,
					transition: {
						type: "spring",
						duration: 2,
						bounce: 0.3,
					},
				},
		  }
		: {
				initial: {y: 100},
				inView: {
					y: 0,
					transition: {
						duration: 1,
					},
				},
		  };

export const Txt =
	window.innerWidth > 768
		? {
				initial: {x: -50, opacity: 0},
				inView: {
					x: 0,
					opacity: 1,
					transition: {
						type: "spring",
						duration: 2,
						bounce: 0.3,
					},
				},
		  }
		: {
				initial: {y: 50},
				inView: {
					y: 0,
					transition: {
						duration: 1,
					},
				},
		  };
