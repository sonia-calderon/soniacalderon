import React from "react";
import "./logo.css";

export const Logo: React.FC = () => {
	return (
		<a className="logo" href="#top">
			SCR
			<span className="visually-hidden"> — Sonia Calderón, back to top</span>
		</a>
	);
};
