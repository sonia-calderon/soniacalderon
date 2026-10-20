import React from "react";
import "./header.css";
import { Logo } from "@/components/logo/logo";
import { Nav } from "@/components/nav/nav";

export const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
			<div className="header__container">
				<Logo />
				<Nav />
			</div>
		</header>
	);
};
