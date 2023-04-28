import 'vite/modulepreload-polyfill';
import './app.css'
import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'
import DefaultLayout from "./layouts/DefaultLayout.svelte";

// I think Inertia-Django's SSR implementation is slightly incomplete
// so we need some extra logic to determine whether to hydrate.

// Only hydrate the first time we load the application
let shouldHydrate = true;

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })
    let page = pages[`./pages/${name}.svelte`];
    return { default: page.default, layout: page.layout || DefaultLayout }
  },
  setup({ el, App, props }) {
    // Mount has server-rendered set to true when SSR'd
    let hydrate = shouldHydrate && el.dataset.serverRendered;
    shouldHydrate = false;
    return mount(App, { target: el }, props)
  },
})

export default app
