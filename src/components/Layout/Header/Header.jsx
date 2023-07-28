import {m} from "framer-motion";
import {Link} from "react-router-dom";
import { useState } from "react";
import {headerAnimation} from "../../../Framer/header";
import MenuMobile from "../Menu Mobile/Menu_Mobile";
import Nav from "../Nav/Nav";
import style from "./headerStyle.module.scss";
import logo from "/src/assets/svg icons/Logo.svg";

export default function Header() {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		// var body = document.body;
		// body.classList.toggle("noScroll");
		setOpen(!isOpen);
	};

	// hide menu nav on scrolldown for tablets and laptops
	var prevScrollpos = window.scrollY;
	if (screen.width > 425) {
		window.onscroll = function () {
			var currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navMenu").style.top = "1.75%";
			} else {
				document.getElementById("navMenu").style.top = "-100px";
			}
			prevScrollpos = currentScrollPos;
		};
	}

	return (
		<m.header
			className={style.header}
			id="navMenu"
			initial="hidden"
			animate="visible"
			variants={headerAnimation}
		>
			<Link to="/" className={style.logo} aria-label="Website logo">
				<img src={logo} alt="website logo" height={50} width={50} />
			</Link>
			<div className={style.line}></div>
			{screen.width > 425 ? (
				<Nav mobile={false} />
			) : (
				<MenuMobile isOpen={isOpen} onClick={toggleMenu}>
					<Nav mobile={true} onClick={toggleMenu}/>
				</MenuMobile>
			)}
		</m.header>
	);
}
