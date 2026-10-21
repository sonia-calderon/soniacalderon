import React, { useEffect } from "react";
import "./nav.css";
import { DarkModeIcon } from "@/components/icons/darkmode";
import { LightModeIcon } from "@/components/icons/lightmode";
import { HamburgerIcon } from "@/components/icons/hamburger";
import { CloseIcon } from "@/components/icons/close";

const navLinks: {
	href: string;
	label: string;
}[] = [
	{ href: "#who-i-am", label: "Who I Am" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

type Theme = "dark" | "light";

export const Nav: React.FC = () => {
	const [theme, setTheme] = React.useState<Theme>("light");
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleThemeMode = () => {
		setTheme(theme === "light" ? "dark" : "light");
		setIsOpen(false);
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="nav" data-nav-isopen={isOpen}>
			<div className="nav__mobile">
				<button
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					onClick={handleMenu}
				>
					{isOpen ? (
						<CloseIcon size={32} color="currentColor" />
					) : (
						<HamburgerIcon size={32} color="currentColor" />
					)}
				</button>
			</div>
			<div className="nav__content">
				<ul className="nav__items">
					{navLinks.map((item) => (
						<li className="nav__item" key={item.href}>
							<a
								className="nav__item-link"
								href={item.href}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="nav__icon-mode">
					<button type="button" aria-label="Toggle theme" onClick={handleThemeMode}>
						{theme === "light" ? (
							<DarkModeIcon size={24} color="currentColor" />
						) : (
							<LightModeIcon size={24} color="currentColor" />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};
