import React from "react";
import "./about.css";
import Avatar from "@/assets/images/avatar.png";
import { SectionTitle } from "@/components/sectionTitle/sectionTitle";

export const AboutComponent: React.FC = () => {
	return (
		<section className="about" id="who-i-am" aria-labelledby="about-title">
			<div className="about__container">
				<SectionTitle title="About me" id="about-title" visuallyHidden={true} />

				<div className="about__avatar">
					<img src={Avatar} alt="Portrait of Sonia" />
				</div>

				<div className="about__content">
					<div className="about__content-header">
						<div className="about__content-header-ellipse"></div>
						<div className="about__content-header-ellipse"></div>
						<div className="about__content-header-ellipse"></div>
					</div>

					<div className="about__content-text">
						<pre>
							<code>
								<span className="keyword">const</span>{" "}
								<span className="variable">developer</span>{" "}
								<span className="operator">=</span>{" "}
								<span className="punctuation">{"{"}</span>
								{"\n  "}
								<span className="property">name</span>
								<span className="punctuation">:</span>{" "}
								<span className="string">"Sonia"</span>
								<span className="punctuation">,</span>
								{"\n  "}
								<span className="property">role</span>
								<span className="punctuation">:</span>{" "}
								<span className="string">"Frontend Developer"</span>
								<span className="punctuation">,</span>
								{"\n\n  "}
								<span className="property">techStack</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">{"{"}</span>
								{"\n    "}
								<span className="property">styling</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"CSS"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"SCSS"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Tailwind CSS"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">languages</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"JavaScript"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"TypeScript"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">frameworks</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"React"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Vue"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">metaFrameworks</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"Next.js"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"TanStack Start"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Nuxt"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">tools</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"Vite"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"GitHub"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Bitbucket"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">backend</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"PHP"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">apis</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"REST API"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"GraphQL"</span>
								<span className="punctuation">],</span>
								{"\n    "}
								<span className="property">databases</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"MySQL"</span>
								<span className="punctuation">],</span>
								{"\n  "}
								<span className="punctuation">{"}"}</span>
								<span className="punctuation">,</span>
								{"\n\n  "}
								<span className="property">interests</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"UX"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Clean code"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Accessibility"</span>
								<span className="punctuation">],</span>
								{"\n\n  "}
								<span className="method">isHireable</span>
								<span className="punctuation">()</span>{" "}
								<span className="punctuation">{"{"}</span>
								{"\n    "}
								<span className="keyword">return</span>{" "}
								<span className="string">true;</span>
								{"\n  "}
								<span className="punctuation">{"},"}</span>
								{"\n"}
								<span className="punctuation">{"};"}</span>
							</code>
						</pre>
					</div>
				</div>
			</div>
		</section>
	);
};
