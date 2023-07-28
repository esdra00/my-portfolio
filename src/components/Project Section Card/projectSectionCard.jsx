import {m} from "framer-motion";
import {Link} from "react-router-dom";
import {Image, Txt} from "../../Framer/projectSection";
import {useFetch} from "../../hooks/useFetch";
import ExternalLinkIcon from "../_shared/svgIcons";
import style from "./projectCard.module.scss";

export default function ProjectSectionCard() {
	const {data} = useFetch();

	return (
		<>
			{data?.map((project) => {
				return (
					<article
						className={`${style.container} ${
							project.orientation == "" ? style.reverse : ""
						}`}
						key={project.id}
						tabIndex={0}
					>
						<m.div
							className={style.txt_w}
							initial="initial"
							whileInView="inView"
							viewport={{once: true}}
							variants={Txt}
						>
							<Link
								to={`/detail/${project.id}`}
								className={style.linkTitle}
							>
								<h3>{project.title}</h3>
								<ExternalLinkIcon />
							</Link>
							<p>{project.description}</p>
							<div className={style.line}></div>
							<ul className={style.framework_list}>
								{project.frameworks.map((framework) => {
									return (
										<li
											className={style.framework}
											key={framework}
										>
											{framework}
										</li>
									);
								})}
							</ul>
						</m.div>
						<m.div
							className={style.image_w}
							initial="initial"
							whileInView="inView"
							viewport={{once: true}}
							variants={Image}
						>
							<img
								src={project.preview}
								alt=""
								className={style.image}
								height={1056}
								width={1440}
							/>
						</m.div>
					</article>
				);
			})}
		</>
	);
}
