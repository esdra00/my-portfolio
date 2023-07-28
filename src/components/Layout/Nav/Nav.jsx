import {Link} from "react-router-dom";
import style from "./navStyle.module.scss";
import CV from "/src/assets/Esdra_Bergamasco_CV.pdf";

export default function Nav({onClick, mobile}) {
	return (
		<nav>
			<ul className={mobile ? style.navMobile : style.nav}>
				<li>
					<Link
						to="/"
						className={mobile ? style.linkMobile : style.link}
						onClick={onClick}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/projectsPage"
						className={mobile ? style.linkMobile : style.link}
						onClick={onClick}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to="/contactPage"
						className={mobile ? style.linkMobile : style.link}
						onClick={onClick}
					>
						Contact
					</Link>
				</li>
				<li>
					<h3 className={style.cta}>
						<a href={CV} target="_blank" rel="noopener noreferrer">
							RESUME
						</a>
					</h3>
				</li>
			</ul>
		</nav>
	);
}
