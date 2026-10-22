import React from "react";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import "@/css/main.css";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};
