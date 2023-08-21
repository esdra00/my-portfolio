import {useInView} from "framer-motion";
import {useRef} from "react";
import profilePicture from "../../../assets/images/pfp.png";
import LinkCta from "../../_shared/Link Cta/linkCta";
import style from "./aboutSectionStyle.module.scss";
import CV from "/src/assets/Esdra_Bergamasco_CV_eng.pdf";

export default function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});

	return (
		<section className={style.section} id="about" tabIndex={0}>
			<div className={style.container} ref={ref}>
				<header
					style={{
						transform: isInView ? "none" : "translateX(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
					}}
				>
					<h2 className={style.header}>About</h2>
				</header>
				<div
					className={style.img_w}
					style={{
						transform: isInView ? "none" : "translateX(200px)",
						opacity: isInView ? 1 : 0,
						transition:
							"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
					}}
				>
					<img
						src={profilePicture}
						className={style.image}
						alt="Profile Picture"
						height={400}
						width={200}
					/>
				</div>
				<div
					className={style.txt_w}
					style={{
						transform: isInView ? "none" : "translateX(-200px)",
						opacity: isInView ? 1 : 0,
						transition:
							"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
					}}
				>
					<div className={style.line}></div>
					<p className={style.txt}>
						My name is <b>Esdra Bergamasco</b> and I am a Front End
						Developer with a passion for web design.<br></br> My
						interest in web development started in 2020 when I first
						started learning the basic of HTML & CSS. From that I went
						on to learn many more frameworks such as bootstrap, sass,
						styled components and choose react and next.js as my main
						focus.<br></br>After spending a lot of time working on a set
						of smaller projects with the aim of showing off my skills, I
						dedicated a considerable amount of time to this website, my
						portfolio, as a cupiditate.
					</p>
				</div>
			</div>
			<LinkCta link={CV} text="resume" />
		</section>
	);
}
