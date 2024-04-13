/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			md: { max: "769px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },

			xs: { max: "321px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
};
