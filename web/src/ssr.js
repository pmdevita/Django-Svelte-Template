import createServer from '@inertiajs/svelte/server'
import { createInertiaApp } from '@inertiajs/svelte'

const PORT = 13714;

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => {
            const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })
            return pages[`./pages/${name}.svelte`]
        },
    }),
    PORT
)