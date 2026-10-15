import React from "react";
import "@/css/components/buttons.css";
import { DownloadIcon } from "./icons/download";
import { ChevronIcon } from "./icons/chevron";

type Color = "orange" | "blue";
type Action = "download" | "view more" | "view less" | "none";

interface Props {
	text: string;
	color: Color;
	action: Action;
	handleClick?: () => void;
}

export const PrimaryButton: React.FC<Props> = (props) => {
	const { text, color, action, handleClick } = props;
	return (
		<button className={`btn-primary ${color}`} onClick={handleClick}>
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
	const { text, color, action, handleClick } = props;

	const isViewButton = action === "view more" || action === "view less";
	const isOpen = action === "view less";

	return (
		<button
			className={`btn-secondary ${color}`}
			onClick={handleClick}
			aria-expanded={isViewButton ? isOpen : undefined}
		>
			{isViewButton && (
				<span className={`btn-secondary__icon ${isOpen ? "is-open" : ""}`}>
					<ChevronIcon
						size={18}
						color={
							color === "blue"
								? "var(--color-terciary)"
								: "var(--color-primary)"
						}
					/>
				</span>
			)}
			{text}
		</button>
	);
};
