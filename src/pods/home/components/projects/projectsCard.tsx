import React from "react";
import "./projects.css";
import { GithubIcon } from "@/components/icons/github";
import { LinkIcon } from "@/components/icons/link";
import type { Project } from "./projects.vm";

interface Props {
	project: Project;
}

export const ProjectsCardComponent: React.FC<Props> = (props) => {
	const { project } = props;

	return (
		<div className="projects__card">
			<div className="projects__card-img">
				<img src={project.image} alt={project.name} />
			</div>
			<div className="projects__card-content">
				<div className="projects__card-content-labels">
					{project.labels.map((label) => (
						<div className="projects__card-label" key={label}>
							<p>{label}</p>
						</div>
					))}
				</div>
				<div className="projects__card-content-texts">
					<div className="projects__card-title">
						<h6>{project.name}</h6>
					</div>
					<div className="projects__card-description">
						<p>{project.description}</p>
					</div>
				</div>
				<div className="projects__card-content-btns">
					<a
						href={project.githubLink}
						className="projects__card-btn-github"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon color="var(--color-pure-white)" size={18} />
						<span>GitHub</span>
					</a>
					<a
						href={project.liveDemoLink}
						className={`projects__card-btn-live ${
							project.liveDemoLink === "" ? "disabled" : ""
						}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-disabled={project.liveDemoLink === ""}
						onClick={(event) => {
							if (project.liveDemoLink === "") {
								event.preventDefault();
							}
						}}
					>
						<LinkIcon color="var(--color-pure-white)" size={18} />
						<span>Live Demo</span>
					</a>
				</div>
			</div>
		</div>
	);
};
