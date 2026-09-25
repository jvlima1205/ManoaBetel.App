// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  // URL base do seu GitHub Pages
  site: "https://jvlima1205.github.io",

  // Nome do seu repositório (com uma barra no início)
  base: "/ManoaBetel.App",

  vite: {
    plugins: [tailwindcss()],
  },
});