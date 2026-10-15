import React from "react";
import "./contact.css";
import { GithubIcon } from "@/components/icons/github";
import { MailIcon } from "@/components/icons/mail";
import { LinkedinIcon } from "@/components/icons/linkedin";

export const ContactComponent: React.FC = () => {
	return (
		<section className="contact" id="contact">
			<div className="contact__container">
				<div className="contact__content">
					<div className="contact__content-text">
						<h3>Let's talk!</h3>
					</div>

					<div className="contact__content-icons">
						<a href="https://github.com/sonia-calderon" target="_blank">
							<GithubIcon size={46} color="var(--color-neutral-700)" />
						</a>
						<a href="mailto:soniacalderonruiz@hotmail.com">
							<MailIcon size={46} color="var(--color-neutral-700)" />
						</a>
						<a
							href="https://www.linkedin.com/in/sonia-calderon-ruiz/"
							target="_blank"
						>
							<LinkedinIcon size={46} color="var(--color-neutral-700)" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
