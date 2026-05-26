import React from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import "../css/main.css";

export const AppLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};
