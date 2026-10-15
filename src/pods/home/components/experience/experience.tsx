import React from "react";
import "./experience.css";
import { SectionTitle } from "@/components/sectionTitle";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { ExperienceCardComponent } from "./experienceCard";
import { experienceData } from "./experience.data";

export const ExperienceComponent: React.FC = () => {
	const [showAll, setShowAll] = React.useState(false);
	const reversedExperienceData = [...experienceData].reverse();
	const visibleCards = showAll
		? reversedExperienceData
		: reversedExperienceData.slice(0, 3);

	const buttonText = showAll ? "View less" : "View more";
	const buttonAction = showAll ? "view less" : "view more";

	return (
		<section className="experience">
			<div className="experience__container">
				<SectionTitle title="Experience" />
				<div className="experience__cards">
					<ExperienceCardComponent experiences={visibleCards} />
				</div>
				<div className="experience__btns">
					<SecondaryButton
						text={buttonText}
						action={buttonAction}
						color="orange"
						handleClick={() => setShowAll(!showAll)}
					/>
					<PrimaryButton text="Download CV" action="download" color="blue" />
				</div>
			</div>
		</section>
	);
};
