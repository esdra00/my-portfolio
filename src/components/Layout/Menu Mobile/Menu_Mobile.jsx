import SocialsLinksIcon from "../Socials/Social_Icon";
import style from "./menuMobileStyle.module.scss";

export default function MenuMobile({children, isOpen, onClick}) {
	return (
		<>
			<div>
				<div
					className={`${style.main_btn} ${isOpen ? style.active : ""}`}
					onClick={onClick}
				>
					<div
						className={`${style.custom_menu_toggle} ${style.openMenu}`}
					></div>
				</div>
			</div>
			<div className={`${style.menu} ${isOpen ? style.open : ""}`}>
				<div>
					<div className={style.title}>
						<h6>navigation</h6>
						<div className={style.line}></div>
					</div>
					{children}
				</div>
				<div>
					<div className={style.title}>
						<h6>follow me</h6>
						<div className={style.line}></div>
					</div>
					<div className={style.iconsWrapper}>
						<SocialsLinksIcon className={style.linkSocial} />
					</div>
				</div>
			</div>
		</>
	);
}
