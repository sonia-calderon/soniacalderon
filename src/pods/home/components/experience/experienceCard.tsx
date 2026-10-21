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
						<h4>{experience.jobTitle}</h4>
						<p className="muted">{experience.companyName}</p>
					</div>
					<div className="experience__card-year">
						<p className="small muted">{experience.year}</p>
					</div>
				</div>
			))}
		</>
	);
};
