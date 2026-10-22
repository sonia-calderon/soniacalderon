import React from "react";
import "./contact.css";
import { GithubIcon } from "@/components/icons/github";
import { MailIcon } from "@/components/icons/mail";
import { LinkedinIcon } from "@/components/icons/linkedin";

export const ContactComponent: React.FC = () => {
	return (
		<section className="contact" id="contact" aria-label="Contact">
			<div className="contact__container">
				<div className="contact__content">
					<div className="contact__content-text">
						<p>Let's talk!</p>
					</div>

					<div className="contact__content-icons">
						<a
							href="https://github.com/sonia-calderon"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<GithubIcon size={34} color="currentColor" />
						</a>
						<a href="mailto:soniacalderonruiz@hotmail.com" aria-label="Email">
							<MailIcon size={34} color="currentColor" />
						</a>
						<a
							href="https://www.linkedin.com/in/sonia-calderon-ruiz/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<LinkedinIcon size={34} color="currentColor" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
