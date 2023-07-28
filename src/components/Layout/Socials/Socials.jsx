import {m} from "framer-motion";
import {socialsAnimation} from "../../../Framer/header";
import SocialsLinksIcon from "./Social_Icon";
import style from "./socialStyle.module.scss";

export default function Socials() {
	return (
		<m.div
			className={style.socialMenu}
			initial="hidden"
			animate="visible"
			variants={socialsAnimation}
		>
			<SocialsLinksIcon className={style.linkSocial} />
			<div className={style.line}></div>
		</m.div>
	);
}
