import style from "./linkCtaStyle.module.scss";

export default function LinkCta({link, text}) {
	return (
		<a href={link} className={style.link} target="_blank" rel="noopener noreferrer">
			{text}
			<svg
				fill="none"
				height="24"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth={2}
				viewBox="0 0 24 24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
				<polyline points="15 3 21 3 21 9" />
				<line x1="10" x2="21" y1="14" y2="3" />
			</svg>
		</a>
	);
}
