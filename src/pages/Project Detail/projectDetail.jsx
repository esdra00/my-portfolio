import {m} from "framer-motion";
import {useParams} from "react-router-dom";
import {container, fadeUp} from "../../Framer/projectDetail";
import LinkCta from "../../components/_shared/Link Cta/linkCta";
import {useFetchID} from "../../hooks/useFetchId";
import style from "./projectDetailStyle.module.scss";

export default function ProjectDetail() {
	const {id} = useParams();
	const {data} = useFetchID(id);

	return (
		<m.div
			className={style.container}
			animate="animate"
			initial="initial"
			variants={container}
		>
			<m.h2 className={style.title} variants={fadeUp}>
				{data?.title}
			</m.h2>
			<m.img
				src={`/${data?.preview}`}
				className={style.img}
				alt="project preview"
				height={660}
				width={900}
				variants={fadeUp}
			/>
			<m.p className={style.desc} variants={fadeUp}>
				{data?.description}
			</m.p>
			<div className={style.cta_w}>
				<LinkCta link={data?.github} text="Github Code" />
				<LinkCta link={data?.site} text="Live Site" />
			</div>
		</m.div>
	);
}
