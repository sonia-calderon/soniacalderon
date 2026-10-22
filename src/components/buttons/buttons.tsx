import React from "react";
import "./buttons.css";
import { DownloadIcon } from "@/components/icons/download";
import { ChevronIcon } from "@/components/icons/chevron";

type Color = "orange" | "blue";
type Action = "download" | "view more" | "view less" | "none";

interface Props {
	text: string;
	color: Color;
	action: Action;
	handleClick?: () => void;
	controlsId?: string;
	expanded?: boolean;
}

interface LinkProps {
	text: string;
	color: Color;
	action: Action;
	href: string;
}

export const PrimaryButton: React.FC<Props> = (props) => {
	const { text, color, action, handleClick, controlsId, expanded } = props;
	return (
		<button
			className={`btn-primary ${color}`}
			onClick={handleClick}
			aria-expanded={expanded}
			aria-controls={controlsId}
		>
			{action === "download" ? (
				<span>
					<DownloadIcon size={36} color="currentColor" />
				</span>
			) : (
				""
			)}
			{text}
		</button>
	);
};

export const PrimaryLink: React.FC<LinkProps> = (props) => {
	const { text, color, action, href } = props;
	return (
		<a className={`btn-primary ${color}`} href={href} target="_blank" rel="noopener noreferrer">
			{action === "download" ? (
				<span>
					<DownloadIcon size={36} color="currentColor" />
				</span>
			) : (
				""
			)}
			{text}
		</a>
	);
};

export const SecondaryButton: React.FC<Props> = (props) => {
	const { text, color, action, handleClick, controlsId } = props;

	const isViewButton = action === "view more" || action === "view less";
	const isOpen = action === "view less";

	return (
		<button
			className={`btn-secondary ${color}`}
			onClick={handleClick}
			aria-expanded={isViewButton ? isOpen : undefined}
			aria-controls={isViewButton ? controlsId : undefined}
		>
			{isViewButton && (
				<span className={`btn-secondary__icon ${isOpen ? "is-open" : ""}`}>
					<ChevronIcon size={18} color="currentColor" />
				</span>
			)}
			{text}
		</button>
	);
};
