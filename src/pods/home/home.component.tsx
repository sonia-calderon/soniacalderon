import React from "react";
import { HeroComponent } from "./components/hero/hero";
import { AboutComponent } from "./components/about/about";
import { ExperienceComponent } from "./components/experience/experience";
import { SkillsComponent } from "./components/skills/skills";
import { ProjectsComponent } from "./components/projects/projects";
import { ContactComponent } from "./components/contact/contact";

export const HomeComponent: React.FC = () => {
	return (
		<>
			<HeroComponent />
			<AboutComponent />
			<ExperienceComponent />
			<SkillsComponent />
			<ProjectsComponent />
			<ContactComponent />
		</>
	);
};
