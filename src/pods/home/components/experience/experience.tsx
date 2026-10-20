import React from "react";
import "./experience.css";
import { SectionTitle } from "@/components/sectionTitle/sectionTitle";
import { PrimaryButton, SecondaryButton } from "@/components/buttons/buttons";
import { ExperienceCardComponent } from "./experienceCard";
import { experienceData } from "./experience.data";
import cvPdf from "@/assets/documents/cv.pdf";

export const ExperienceComponent: React.FC = () => {
	const [showAll, setShowAll] = React.useState(false);
	const [isHiding, setIsHiding] = React.useState(false);

	const reversedExperienceData = [...experienceData].reverse();
	const visibleCards = showAll
		? reversedExperienceData
		: reversedExperienceData.slice(0, 3);

	const handleToggle = () => {
		if (showAll) {
			setIsHiding(true);

			window.setTimeout(() => {
				setShowAll(false);
				setIsHiding(false);
			}, 350);
		} else {
			setShowAll(true);
		}
	};

	const buttonText = showAll ? "View less" : "View more";
	const buttonAction = showAll ? "view less" : "view more";

	return (
		<section className="experience">
			<div className="experience__container">
				<SectionTitle title="Experience" />
				<div
					className={`experience__cards ${
						isHiding ? "experience__cards--hiding" : ""
					}`}
				>
					<ExperienceCardComponent experiences={visibleCards} />
				</div>
				<div className="experience__btns">
					<SecondaryButton
						text={buttonText}
						action={buttonAction}
						color="orange"
						handleClick={handleToggle}
					/>
					<a href={cvPdf} target="_blank" rel="noopener noreferrer">
						<PrimaryButton text="Download CV" action="download" color="blue" />
					</a>
				</div>
			</div>
		</section>
	);
};
