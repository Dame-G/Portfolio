// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	adapter: netlify(),
});
