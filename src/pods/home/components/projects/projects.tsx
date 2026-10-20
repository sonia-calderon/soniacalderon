import React from "react";
import "./projects.css";
import { SectionTitle } from "@/components/sectionTitle";
import { PrimaryButton } from "@/components/buttons";
import { ProjectsCardComponent } from "./projectsCard";
import { projectsData } from "./projects.data";

export const ProjectsComponent: React.FC = () => {
	const [showAll, setShowAll] = React.useState(false);
	const [isHiding, setIsHiding] = React.useState(false);

	const reversedProjectsData = [...projectsData].reverse();
	const visibleCards = showAll
		? reversedProjectsData
		: reversedProjectsData.slice(0, 3);

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

	const buttonText = showAll ? "I want to see less" : "I want to see more";

	return (
		<section className="projects" id="projects">
			<div className="projects__container">
				<SectionTitle title="Projects" />
				<div
					className={`projects__cards ${
						isHiding ? "projects__cards--hiding" : ""
					}`}
				>
					{visibleCards.map((project) => (
						<ProjectsCardComponent key={project.id} project={project} />
					))}
				</div>
				<PrimaryButton
					text={buttonText}
					color="orange"
					action="none"
					handleClick={handleToggle}
				/>
			</div>
		</section>
	);
};
