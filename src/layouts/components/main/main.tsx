import React from "react";
import "./container.css";

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <main id="main-content">{children}</main>;
};
