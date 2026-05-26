import React from "react";
import { HamburgerIcon } from "../../components/icons/hamburger";
import { CloseIcon } from "../../components/icons/close";
import { DarkModeIcon } from "../../components/icons/darkmode";
import { LightModeIcon } from "../../components/icons/lightmode";

export const Header: React.FC = () => {
	return (
		<header>
			<HamburgerIcon size={24} color="red" />
			<CloseIcon size={24} color="red" />
			<DarkModeIcon size={24} color="red" />
			<LightModeIcon size={24} color="red" />
		</header>
	);
};
