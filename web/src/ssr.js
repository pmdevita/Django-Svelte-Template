import createServer from '@inertiajs/svelte/server'
import { createInertiaApp } from '@inertiajs/svelte'
import DefaultLayout from "./layouts/DefaultLayout.svelte";

const PORT = 13714;

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => {
            const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })
          let page = pages[`./pages/${name}.svelte`];
          return { default: page.default, layout: page.layout || DefaultLayout }
        },
    }),
    PORT
)