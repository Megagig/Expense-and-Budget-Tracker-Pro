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
      {
        light: {
          "primary": "#4F46E5",
          "secondary": "#0EA5E9",
          "accent": "#F59E0B",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "info": "#0EA5E9",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
        dark: {
          "primary": "#6366F1",
          "secondary": "#38BDF8",
          "accent": "#FBBF24",
          "neutral": "#9CA3AF",
          "base-100": "#1F2937",
          "base-200": "#111827",
          "base-300": "#0F172A",
          "info": "#38BDF8",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#F87171",
        }
      },
      "light",
      "dark",
    ],
    darkTheme: "dark",
  },
} satisfies Config;
