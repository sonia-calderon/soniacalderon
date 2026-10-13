import React from "react";
import { AppLayout } from "@/layouts/app.layout";
import { HomeContainer } from "@/pods/home/home.container";

export const HomePage: React.FC = () => {
	return (
		<AppLayout>
			<HomeContainer />
		</AppLayout>
	);
};
