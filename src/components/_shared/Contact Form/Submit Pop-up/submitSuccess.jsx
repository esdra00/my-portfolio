import {IconSuccess} from "../../svgIcons";
import style from "./submittedPopupStyle.module.scss";

export default function SubmitSuccess() {
	return (
		<div className={style.success}>
			<IconSuccess />
			<p className={style.text}>Submitted with success!</p>
		</div>
	);
}
