import {m, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {container, text} from "../../../Framer/contactSection";
import style from "./contactSectionStyle.module.scss";
import ContactForm from "/src/components/_shared/Contact Form/Contact_Form";

export default function ContactSection({animation}) {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]});
	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<>
			{animation ? (
				<m.div className={style.round_w} style={{height}}>
					<div className={style.round}></div>
				</m.div>
			) : null}
			<section className={style.section} ref={ref}>
				<m.div
					className={style.contactBox}
					initial="initial"
					whileInView="inView"
					viewport={{once: true}}
					variants={container}
				>
					<m.header variants={text}>
						<h2 className={style.title}>
							Let's get to know
							<br />
							each other!
						</h2>
					</m.header>
					<div>
						<m.p className={style.desc} variants={text}>
							Do you have any question? Are you interested in working
							with me? Do you have any suggestion?
							<br />
							Please let me know.
						</m.p>
						<m.div variants={text}>
							<ContactForm />
						</m.div>
					</div>
					<footer>
						<div className={style.line}></div>
						Designed & Built by{" "}
						<a href="https://github.com/esdra00">
							&#64;Esdra Bergamasco
						</a>
					</footer>
				</m.div>
			</section>
		</>
	);
}
