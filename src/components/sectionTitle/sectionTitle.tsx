import React from "react";
import "./sectionTitle.css";

interface Props {
	title: string;
	id?: string;
	visuallyHidden: boolean;
}

export const SectionTitle: React.FC<Props> = (props) => {
	const { title, id, visuallyHidden } = props;
	return (
		<div className="section__title">
			<h3
				className={
					visuallyHidden
						? "section__title-heading visually-hidden"
						: "section__title-heading"
				}
				id={id}
			>
				{title}
			</h3>
		</div>
	);
};
