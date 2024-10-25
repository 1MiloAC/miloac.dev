import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
            fontFamily: {
                'sans': ['Ariel', 'Helvetica', 'sans-serif'],
                'hoover-regular': ['Hoover-Regular', 'Arial', 'sans-serif'],
                'space-mono': ['Space-Mono', 'monospace']
            }
        }
	},

	plugins: [typography]
} as Config;
