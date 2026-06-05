import React from "react";
import "../css/components/buttons.css";
import { DownloadIcon } from "./icons/download";
import { ChevronIcon } from "./icons/chevron";

type Color = "orange" | "blue";
type Action = "download" | "view more" | "view less" | undefined;

interface Props {
	text: string;
	color: Color;
	action: Action;
}

export const PrimaryButton: React.FC<Props> = (props) => {
	const { text, color, action } = props;
	return (
		<button className={`btn-primary ${color}`}>
			{action === "download" ? (
				<span>
					<DownloadIcon
						size={36}
						color={
							color === "blue"
								? "var(--color-terciary)"
								: "var(--color-primary)"
						}
					/>
				</span>
			) : (
				""
			)}
			{text}
		</button>
	);
};

export const SecondaryButton: React.FC<Props> = (props) => {
	const { text, color, action } = props;
	return (
		<button className={`btn-secondary ${color}`}>
			{action === "view more" ? (
				<span>
					<ChevronIcon
						size={18}
						color={
							color === "blue"
								? "var(--color-terciary)"
								: "var(--color-primary)"
						}
					/>
				</span>
			) : (
				""
			)}
			{text}
		</button>
	);
};
