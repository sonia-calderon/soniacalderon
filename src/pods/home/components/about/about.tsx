import React from "react";
import "./about.css";
import Avatar from "@/assets/images/avatar.png";

export const AboutComponent: React.FC = () => {
	return (
		<section className="about" id="who-i-am">
			<div className="about__container">
				<div className="about__avatar">
					<img src={Avatar} alt="" />
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
								<span className="variable">Developer</span>{" "}
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
								<span className="property">frontend</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"HTML"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"CSS"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"JavaScript"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"TypeScript"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Vite"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"React"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Vue"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Next.js"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"Tailwind"</span>
								<span className="punctuation">],</span>
								<span className="string">"API Rest"</span>
								<span className="punctuation">],</span>
								<span className="string">"Unit testing"</span>
								<span className="punctuation">],</span>
								{"\n\n  "}
								<span className="property">backend</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"PHP"</span>
								<span className="punctuation">],</span>
								{"\n  "}
								<span className="property">databases</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"MySQL"</span>
								<span className="punctuation">],</span>
								{"\n\n  "}
								<span className="property">hobbies</span>
								<span className="punctuation">:</span>{" "}
								<span className="punctuation">[</span>
								<span className="string">"📖 Reading"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"🌴 Traveling"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"🏋️‍ CrossFit"</span>
								<span className="punctuation">,</span>{" "}
								<span className="string">"🏃‍ Running"</span>
								<span className="punctuation">],</span>
								{"\n\n  "}
								<span className="method">hireable</span>
								<span className="punctuation">()</span>{" "}
								<span className="punctuation">{"{"}</span>
								{"\n    "}
								<span className="keyword">return</span> {"\n      "}
								<span className="this">this</span>
								<span className="punctuation">.</span>
								creative <span className="operator">&&</span>
								{"\n      "}
								<span className="this">this</span>
								<span className="punctuation">.</span>
								problemSolver <span className="operator">&&</span>
								{"\n      "}
								<span className="this">this</span>
								<span className="punctuation">.</span>
								focus <span className="operator">===</span>{" "}
								<span className="string">"Clean code & delightful UX"</span>
								{"\n    "}
								<span className="punctuation">);</span>
								{"\n  "}
								<span className="punctuation">{"}"}</span>
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
