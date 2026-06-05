import React from "react";
import "./experienceCard.css";
import type { ExperienceItemsModel } from "./experience.vm";

interface Props {
	experiences: ExperienceItemsModel[];
}

export const ExperienceCardComponent: React.FC<Props> = (props) => {
	const { experiences } = props;
	return (
		<>
			{experiences.map((experience) => (
				<div className="experience__card" key={experience.id}>
					<div className="experience__card-content">
						<h6>{experience.jobTitle}</h6>
						<p>{experience.companyName}</p>
					</div>
					<div className="experience__card-year">
						<p>{experience.year}</p>
					</div>
				</div>
			))}
		</>
	);
};
