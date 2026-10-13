import React from "react";
import "@/css/components/container.css";

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <main>{children}</main>;
};
