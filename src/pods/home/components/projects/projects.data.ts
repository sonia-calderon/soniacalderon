import type { Project } from "./projects.vm";
import realfoodingShopImage from "@/assets/images/projects/realfooding-shop.png";
import homerSimpsonWebpageImage from "@/assets/images/projects/homer-simpson-webpage.png";
import ticTacToeImage from "@/assets/images/projects/tic-tac-toe.png";
import italianRestaurantImage from "@/assets/images/projects/italian-restaurant.png";
import randomChapterGeneratorImage from "@/assets/images/projects/random-chapter-generator.png";
import githubFinderImage from "@/assets/images/projects/github-finder.png";
import rickAndMortyFinderImage from "@/assets/images/projects/rick-and-morty-finder.png";
import bookstoreCartImage from "@/assets/images/projects/bookstore-cart.png";
import toDoListImage from "@/assets/images/projects/to-do-list.png";
import bookshelfImage from "@/assets/images/projects/bookshelf.png";
import mealPlannerImage from "@/assets/images/projects/meal-planner.png";

export const projectsData: Project[] = [
	{
		id: "1",
		name: "Realfooding Shop",
		description: "",
		githubLink: "https://github.com/sonia-calderon/final-project-fullstackdev",
		liveDemoLink: "",
		labels: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
		image: realfoodingShopImage,
	},
	{
		id: "2",
		name: "Homer Simpson Webpage",
		description:
			"Clone of Homer Simpson’s web page. Chapter: ‘The Computer Wore Menace Shoes’.",
		githubLink: "https://github.com/sonia-calderon/homer-simpson-webpage",
		liveDemoLink: "https://sonia-calderon.github.io/homer-simpson-webpage/",
		labels: ["HTML", "CSS", "JavaScript"],
		image: homerSimpsonWebpageImage,
	},
	{
		id: "3",
		name: "Tic Tac Toe",
		description: "Tic tac toe game. Two players are needed to play.",
		githubLink: "https://github.com/sonia-calderon/tic-tac-toe",
		liveDemoLink: "https://sonia-calderon.github.io/tic-tac-toe/",
		labels: ["HTML", "CSS", "JavaScript"],
		image: ticTacToeImage,
	},
	{
		id: "4",
		name: "Italian Restaurant",
		description: "Reservation management system of an italian restaurant.",
		githubLink:
			"https://github.com/sonia-calderon/reserva-restaurante-pulcinella",
		liveDemoLink: "",
		labels: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Bootstrap"],
		image: italianRestaurantImage,
	},
	{
		id: "5",
		name: "Random Chapter Generator",
		description:
			"A web application enabling users to discover random episodes of The Simpsons with a simple click. It utilizes information sourced from an API.",
		githubLink: "https://github.com/sonia-calderon/random-episode-generator",
		liveDemoLink: "https://sonia-calderon.github.io/random-episode-generator/",
		labels: ["HTML", "CSS", "JavaScript", "REST API"],
		image: randomChapterGeneratorImage,
	},
	{
		id: "6",
		name: "Github Finder",
		description:
			"A React-based application for viewing GitHub organization members. Users can search for different organizations and navigate to the details of each member.",
		githubLink: "https://github.com/sonia-calderon/github-finder",
		liveDemoLink: "https://sonia-calderon.github.io/github-finder/",
		labels: ["React", "Material UI", "TypeScript", "Vite"],
		image: githubFinderImage,
	},
	{
		id: "7",
		name: "Rick & Morty Finder",
		description:
			"A React-based application for viewing Rick & Morty characters. Users can search for different characters and navigate to the details.",
		githubLink: "https://github.com/sonia-calderon/rick-and-morty-finder",
		liveDemoLink: "https://sonia-calderon.github.io/rick-and-morty-finder/",
		labels: ["React", "Material UI", "TypeScript", "Vite"],
		image: rickAndMortyFinderImage,
	},
	{
		id: "8",
		name: "Bookstore Cart",
		description:
			"Small React application that simulates a basic shopping cart experience. Users can browse a list of books, add products to the cart, and remove them dynamically.",
		githubLink: "https://github.com/sonia-calderon/bookstore-cart",
		liveDemoLink: "https://sonia-calderon.github.io/bookstore-cart/",
		labels: ["React", "CSS", "TypeScript", "Vite"],
		image: bookstoreCartImage,
	},
	{
		id: "9",
		name: "To Do List",
		description:
			"Task management application built with React. Users can create, organize, filter, and edit tasks dynamically.",
		githubLink: "https://github.com/sonia-calderon/to-do-list",
		liveDemoLink: "https://sonia-calderon.github.io/to-do-list/",
		labels: ["React", "Material UI", "TypeScript", "Vite"],
		image: toDoListImage,
	},
	{
		id: "10",
		name: "BookShelf",
		description:
			"Personal library management application built with Angular. Users can organize their reading collection, track progress, manage books, and explore their library through a responsive and intuitive interface.",
		githubLink: "https://github.com/sonia-calderon/bookshelf",
		liveDemoLink: "https://sonia-calderon.github.io/bookshelf/",
		labels: ["Angular", "Angular Material", "TypeScript", "SCSS"],
		image: bookshelfImage,
	},
	{
		id: "11",
		name: "Meal Planner",
		description:
			"Meal planning application built with Vue 3. Users can organize their meals throughout the week, manage their dishes, create favorites, and plan meals by weekday and category.",
		githubLink: "https://github.com/sonia-calderon/meal-planner",
		liveDemoLink: "https://sonia-calderon.github.io/meal-planner/",
		labels: ["Vue", "TypeScript", "TailwindCSS", "Vite"],
		image: mealPlannerImage,
	},
];
