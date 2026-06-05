import React from "react";
import "../../css/components/header.css";
import { Logo } from "../../components/logo";
import { Nav } from "../../components/nav";

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Logo />
				<Nav />
			</div>
		</header>
	);
};
