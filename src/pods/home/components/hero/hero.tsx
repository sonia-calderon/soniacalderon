import React from "react";
import { HeroIlustration } from "@/components/icons/hero-ilustration";
import "./hero.css";

export const HeroComponent: React.FC = () => {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<h1>
						¡Hola! <br /> Soy Sonia Calderón
					</h1>
					<h2>Frontend Developer</h2>
				</div>
			</div>
			<div className="hero__ilustration">
				<HeroIlustration />
			</div>
		</section>
	);
};
