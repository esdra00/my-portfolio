import {GithubSvg, GmailSvg, LinkedinSvg, WhatsAppSvg} from "../../_shared/svgIcons";

const Links = ({children, link, className, label}) => {
	return (
		<div className={className}>
			<a href={link} target="_blank" aria-label={`link to my ${label}`}>
				{children}
			</a>
		</div>
	);
};

export default function SocialsLinksIcon({className}) {
	return (
		<>
			<Links className={className} link={"https://github.com/esdra00"} label={"github"}>
				<GithubSvg />
			</Links>
			<Links
				className={className}
				link={"https://www.linkedin.com/in/esdra-bergamasco/"} label={"linkedin"}
			>
				<LinkedinSvg />
			</Links>
			<Links className={className} link={"mailto:esdrabergamasco@gmail.com"} label={"gmail"}>
				<GmailSvg />
			</Links>
			<Links className={className} link={"tel:+393475330260"} label={"number"}>
				<WhatsAppSvg />
			</Links>
		</>
	);
}
