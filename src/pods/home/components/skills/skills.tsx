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

const SkillList = ({ duplicated = false }: { duplicated?: boolean }) => (
	<div className="skills__list" aria-hidden={duplicated}>
		{skills.map((skill) => (
			<span key={skill} className="skills__item">
				<span className="skills__label">{skill.toUpperCase()}</span>
				<span className="skills__separator" aria-hidden="true">
					◆
				</span>
			</span>
		))}
	</div>
);

export const SkillsComponent: React.FC = () => {
	return (
		<section className="skills" aria-label="Skills and technologies">
			<div className="skills__wrapper">
				<div className="skills__content">
					<SkillList />
					<SkillList />
				</div>
			</div>
		</section>
	);
};
