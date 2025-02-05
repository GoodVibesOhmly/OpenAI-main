import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Movie Critic",
	desc: "I want you to act as a movie critic. You will develop an engaging and creative movie review. You can cover topics like plot, themes and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pace, dialog. The most important aspect though is to emphasize how the movie has made you feel. What has really resonated with you. You can also be critical about the movie. Please avoid spoilers.",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/moviecritic",
	api: "/ai/writing/moviecritic",

	output: {
		title: "Introduction",
		desc: "The following introduction has been generated",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Entry Text",
		desc: "Write small sentence or paragraph you wish to review.",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "The Subject", 
				label: "The title you were planning to give the article.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Getting Started With Nextjs & TailwindCSS",
			},
			{ 
				title: "Audience", 
				attr: "audience",  
				value: "", 
				placeholder: "Technology, development, etc", 
				label: "Who the main group are you are writing for",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Technology, development",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "An article about how to start coding...", 
				label: "A short description of what the article will be about",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "An article about why its important to use storybook to document your progress even when working without a javascript framework to help you understand what you are doing.",
			},
			{ 
				title: "Keywords", 
				attr: "keywords",  
				value: "", 
				placeholder: "Tech, code, etc...", 
				label: "A summary of keywords that the article will consist of",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "Coding, development, nextjs, tailwindcss, js",
			},
		],
		example: {
			output: "Storybook is a development environment for UI components. It helps you iterate faster on UI code. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.\n\nI believe in Storybook’s value, and I’m sure it will improve your workflow. But I’m also going to share with you a different approach that can help you save some time without using a JavaScript framework.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

