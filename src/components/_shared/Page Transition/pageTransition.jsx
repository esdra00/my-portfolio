export default function Transition({children}) {
	return (
		<>
			{/* <m.div
				initial={{height: 4000, y: 500}}
				animate={{height: 0, y: 0}}
				exit={{height: 0}}
				// transition={{duration: 10, ease: [0.645, 0.045, 0.355, 1]}}
				transition={{duration: 1, ease: easeInOut}}
				className="transition"
			>
				<div className="rounded-up">
					<div className="roundedd"></div>
				</div>
				<div className="rounded-down">
					<div className="roundedd"></div>
				</div>
			</m.div> */}

			{children}
		</>
	);
}
// export default function Transition({children}) {
// 	return (
// 		<m.div >
// 			<m.div
// 				initial={{scaleY: 0}}
// 				animate={{
// 					scaleY: 0,
// 				}}
// 				exit={{
// 					scaleY: 1,
// 				}}
// 				transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
// 				className="slide-in"
// 			></m.div>
// 			<m.div
// 				initial={{scaleY: 1}}
// 				animate={{
// 					scaleY: 0,
// 				}}
// 				exit={{
// 					scaleY: 0,
// 				}}
// 				transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
// 				className="slide-out"
// 			></m.div>
// 			{children}
// 		</m.div>
// 	);
// }

// import {m} from "framer-motion";

// export default function Transition({isPresent}) {
// 	return (
// 		<m.div
// 			initial={{scaleX: 1}}
// 			animate={{
// 				scaleY: 0,
// 				transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
// 			}}
// 			exit={{
// 				scaleY: 1,
// 				transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
// 			}}
// 			// style={{originY: isPresent ? 0 : 1}}
// 			className="privacy-screen"
// 		></m.div>
// 	);
// }
