// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'http://localhost:4321',
    integrations: [
        mdx(),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        icon(),
        sitemap(),
    ],

    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },

    experimental: {
        svg: true,
    },
});
