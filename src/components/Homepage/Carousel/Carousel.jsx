import {m, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import style from "./carouselStyle.module.scss";

const images = [
	"ip address tracker - 1.jpg",
	"multi step form - 1.jpg",
	"Rest country api - 1.jpg",
	"interactive comment section - 1.jpg",
];

const CarouselImg = () => {
	return (
		<>
			{images.map((e) => {
				return (
					<div className={style.carousel_img} key={e}>
						<img
							src={e}
							alt="project preview"
							height={230}
							width={320}
						/>
					</div>
				);
			})}
		</>
	);
};

export default function Carousel() {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll();

	return (
		<div className={style.carousel} ref={ref}>
			<div className={style.container_car}>
				<m.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [500, 0], {
							clamp: false,
						}),
					}}
				>
					<CarouselImg />
				</m.div>
				<m.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [-500, 0], {
							clamp: false,
						}),
					}}
				>
					<CarouselImg />
				</m.div>
			</div>
		</div>
	);
}
