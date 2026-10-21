import React from "react";
import "./sectionTitle.css";

interface Props {
	title: string;
}

export const SectionTitle: React.FC<Props> = (props) => {
	const { title } = props;
	return (
		<div className="section__title">
			<h3 className="section__title-heading">{title}</h3>
		</div>
	);
};
