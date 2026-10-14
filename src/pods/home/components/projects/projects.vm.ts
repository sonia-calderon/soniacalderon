export interface Project {
	id: string;
	name: string;
	description: string;
	githubLink: string;
	liveDemoLink: string;
	labels: Labels[];
	image: string;
}

type Labels =
	| "JavaScript"
	| "TypeScript"
	| "React"
	| "Angular"
	| "Vue"
	| "Node.js"
	| "Express"
	| "SQL"
	| "HTML"
	| "CSS"
	| "Sass"
	| "SCSS"
	| "TailwindCSS"
	| "Bootstrap"
	| "Material UI"
	| "Angular Material"
	| "Next.js"
	| "GraphQL"
	| "REST API"
	| "Docker"
	| "Cypress"
	| "PHP"
	| "Vite";
