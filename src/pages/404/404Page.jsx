import {Link} from "react-router-dom";
import style from "./404Style.module.scss";

export default function ErrorPage() {
	return (
		<div className={style.section}>
			<div className={style.container}>
				<div className={style.txt_w}>
					<h1>
						Houston,
						<br />
						we have
						<br />a problem!
					</h1>
					<p>Error 404, the page you are looking for doesn't exist.</p>
					<Link to="/" className={style.ctaError}>
						<span class={style.circle}>
							<span className={style.circle_svg_w}>
								<span className={style.circle_svg}></span>
								<span className={style.circle_svg}></span>
							</span>
						</span>
						Take me home
					</Link>
				</div>
				<div className={style.image_w}>
					<img
						src="/src/assets/images/404-large.jpg"
						alt=""
						className={style.image}
						height={3333}
						width={2400}
					/>
				</div>
			</div>
		</div>
	);
}
