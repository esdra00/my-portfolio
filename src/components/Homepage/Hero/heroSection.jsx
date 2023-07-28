import style from "./heroSectionStyle.module.scss";
import {m} from "framer-motion";

export default function HeroSection() {
	return (
		<m.div className={style.section}>
			<div className={style.container}>
				<div className={style.hero}>
					<h1>Esdra Bergamasco</h1>
					<h2>Front-end Web Developer</h2>
				</div>
				<a href="#about" className={style.cta}>
					<div id={style.scrolldown}>
						<span className={style.arrowdown}></span>
						<span id={style.scrolltitle}>Scroll down</span>
					</div>
				</a>
			</div>
		</m.div>
	);
}
