/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'var(--background)',
		  foreground: 'var(--foreground)',
		  primary: {
			DEFAULT: 'var(--primary)',
			foreground: 'var(--primary-foreground)',
		  },
		  secondary: {
			DEFAULT: 'var(--secondary)',
			foreground: 'var(--secondary-foreground)',
		  },
		  muted: {
			DEFAULT: 'var(--muted)',
			foreground: 'var(--muted-foreground)',
		  },
		  accent: {
			DEFAULT: 'var(--accent)',
			foreground: 'var(--accent-foreground)',
		  },
		  border: 'var(--border)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
