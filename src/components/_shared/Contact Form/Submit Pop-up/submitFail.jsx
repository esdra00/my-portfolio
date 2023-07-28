import style from "./submittedPopupStyle.module.scss";

export default function SubmitFail({error: string}) {
	return (
		<div className={style.fail}>
			<p className={style.text}>Failed to submit.{error}</p>
		</div>
	);
}
