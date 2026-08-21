import React from "react";
import "./skills.css";

const skills: string[] = [
	"HTML",
	"CSS",
	"SASS",
	"Tailwind",
	"JavaScript",
	"TypeScript",
	"Vite",
	"React",
	"Vue",
	"NextJS",
	"Github",
	"API Rest",
	"UX",
];

const SkillList = () => (
	<>
		{skills.map((skill) => (
			<span key={skill}>{skill.toUpperCase()} /</span>
		))}
	</>
);

export const SkillsComponent: React.FC = () => {
	return (
		<section className="skills">
			<div className="skills__wrapper">
				<div className="skills__content">
					<SkillList />
					<SkillList />
				</div>
			</div>
		</section>
	);
};
