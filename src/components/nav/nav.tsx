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

const THEME_STORAGE_KEY = "theme";
const NAV_MENU_ID = "nav-menu";

const getInitialTheme = (): Theme => {
	try {
		const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
		if (stored === "dark" || stored === "light") return stored;

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	} catch {
		return "light";
	}
};

export const Nav: React.FC = () => {
	const [theme, setTheme] = React.useState<Theme>(getInitialTheme);
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleThemeMode = () => {
		setTheme((current) => {
			const next = current === "light" ? "dark" : "light";

			try {
				window.localStorage.setItem(THEME_STORAGE_KEY, next);
			} catch {
				// Theme still works for this session.
			}

			return next;
		});
		setIsOpen(false);
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
		document.documentElement.style.colorScheme = theme;
	}, [theme]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

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
					aria-controls={NAV_MENU_ID}
					onClick={handleMenu}
				>
					{isOpen ? (
						<CloseIcon size={32} color="currentColor" />
					) : (
						<HamburgerIcon size={32} color="currentColor" />
					)}
				</button>
			</div>
			<div className="nav__content" id={NAV_MENU_ID}>
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
					<button
						type="button"
						aria-label="Toggle dark theme"
						aria-pressed={theme === "dark"}
						onClick={handleThemeMode}
					>
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
