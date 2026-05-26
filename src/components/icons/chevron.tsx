import type { IconProps } from "./iconProps";

export const ChevronIcon: React.FC<IconProps> = ({ size, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M19 9L12 16L5 9"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
