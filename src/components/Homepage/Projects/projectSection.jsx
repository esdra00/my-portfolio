import LinkCta from "../../_shared/Link Cta/linkCta";
import style from "./projectSectionStyle.module.scss";
import ProjectSectionCard from "/src/components/Project Section Card/projectSectionCard";

export default function ProjectSection() {
	return (
		<section className={style.section} id="projects">
			<header className={style.title}>
				<div className={style.line}></div>
				<h2 initial="title">Projects</h2>
				<div className={style.line}></div>
			</header>
			<div className={style.container}>
				<ProjectSectionCard />
				<LinkCta link={"https://github.com/esdra00"} text="More Work" />
			</div>
		</section>
	);
}