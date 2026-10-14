import React from "react";
import "./projects.css";
import { SectionTitle } from "@/components/sectionTitle";
import { PrimaryButton } from "@/components/buttons";
import { ProjectsCardComponent } from "./projectsCard";
import { projectsData } from "./projects.data";

export const ProjectsComponent: React.FC = () => {
	return (
		<section className="projects">
			<div className="projects__container">
				<SectionTitle title="Projects" />
				<div className="projects__cards">
					{[...projectsData].reverse().map((project) => (
						<ProjectsCardComponent key={project.id} project={project} />
					))}
				</div>
				<PrimaryButton text="Quiero ver más" color="orange" action="none" />
			</div>
		</section>
	);
};
