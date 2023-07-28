import {m, stagger} from "framer-motion";
import {Link} from "react-router-dom";
import {card} from "../../Framer/projectPage";
import {useFetch} from "../../hooks/useFetch";
import ExternalLinkIcon from "../_shared/svgIcons";
import style from "./projectPageCardStyle.module.scss";

export default function ProjectPageCard({isActive}) {
	const {data} = useFetch();

	return (
		<div className={style.projects_w}>
			{data?.map((project) => {
				if (isActive.every((f) => project.frameworks.includes(f))) {
					return (
						<m.div
							className={style.container}
							key={project.id}
							variants={card}
							transition={{delay: stagger(0.3)}}
						>
							<div className={style.txt_w}>
								<h3>
									<Link
										to={`/detail/${project.id}`}
										className={style.title}
									>
										{project.title}
										<ExternalLinkIcon />
									</Link>
								</h3>
								<div className={style.line}></div>
								<ul className={style.framework_list}>
									{project.frameworks?.map((framework) => {
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
							</div>
							<div className={style.image_w}>
								<img
									src={project.preview}
									alt="project preview"
									className={style.image}
									height={1056}
									width={1440}
								/>
							</div>
						</m.div>
					);
				}
			})}
		</div>
	);
}
