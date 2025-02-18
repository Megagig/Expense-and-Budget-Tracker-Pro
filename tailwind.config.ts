import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'pastel',
      'retro',
      'coffee',
      'forest',
      'cyberpunk',
      'synthwave',
      'luxury',
      'autumn',
      'valentine',
      'aqua',
      'business',
      'night',
      'dracula',
    ],
  },
} satisfies Config;
