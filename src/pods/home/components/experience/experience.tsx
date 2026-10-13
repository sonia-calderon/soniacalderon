import React from "react";
import "./experience.css";
import { SectionTitle } from "@/components/sectionTitle";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { ExperienceCardComponent } from "./experienceCard";
import { experienceData } from "./experience.data";

export const ExperienceComponent: React.FC = () => {
	return (
		<section className="experience">
			<div className="experience__container">
				<SectionTitle title="Experience" />
				<div className="experience__cards">
					<ExperienceCardComponent experiences={experienceData} />
				</div>
				<div className="experience__btns">
					<SecondaryButton text="Ver más" action="view more" color="orange" />
					<PrimaryButton text="Descargar CV" action="download" color="blue" />
				</div>
			</div>
		</section>
	);
};
