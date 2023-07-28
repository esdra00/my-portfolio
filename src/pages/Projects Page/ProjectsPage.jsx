import {m} from "framer-motion";
import {useState} from "react";
import FilterButton from "/src/components/_shared/Filter Button/filterButton";

import {content, title, layout} from "../../Framer/projectPage.js";
import ProjectPageCard from "../../components/Project Page Card/projectPageCard.jsx";
import style from "./projectsPageStyle.module.scss";

export default function ProjectsPage() {
	const [isActive, setActive] = useState([]);
	const [filters, setFilter] = useState([
		"React",
		"Javascript",
		"Next",
		"Styled Components",
		"Bootstrap",
	]);

	// when clicking a filter removes it from filters state array
	// and adds it to isActive state array
	const setActiveFilter = (e) => {
		if (!isActive.includes(e.target.value)) {
			setActive([...isActive, e.target.value]);
		}

		setFilter(
			filters.filter(function (i) {
				return i !== e.target.value;
			})
		);
	};

	// when clicking an active filters removes it from isActive state array
	// and adds it to filters state array
	const removeActiveFilter = (e) => {
		if (!filters.includes(e.target.value)) {
			setFilter([...filters, e.target.value]);
		}

		setActive(
			isActive.filter(function (i) {
				return i !== e.target.value;
			})
		);
	};

	return (
		<m.div
			className={style.section}
			variants={layout}
			animate="animate"
			initial="initial"
		>
			<div className={style.title_w}>
				<m.h3 variants={title}>Projects</m.h3>
				<m.h2 variants={title}>A selection of my works!</m.h2>
			</div>
			<m.div className={style.content} variants={content}>
				<div className={style.filterBar}>
					<FilterButton
						array={filters}
						onclick={setActiveFilter}
						classname={style.filter}
					/>
					<div className={style.line}></div>
					<FilterButton
						array={isActive}
						onclick={removeActiveFilter}
						classname={style.activeFilter}
					/>
				</div>
				<ProjectPageCard isActive={isActive} />
			</m.div>
		</m.div>
	);
}
