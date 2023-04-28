import './app.css'
import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })
    return pages[`./pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    mount(App, { target: el }, props)
  },
})
