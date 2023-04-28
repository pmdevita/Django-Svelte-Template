# Django Svelte Template

A template for Django that uses InertiaJS, Svelte, and TailwindCSS. Preconfigured for HMR and SSR.

The master branch contains the template for use in the instructions, 
and a runnable demo is in the testing branch.

# Usage

## Prerequisites

- Python 3.8+
- NodeJS 16+

## Instructions

0. Setup a virtual environment/Poetry/whatever and install `django`, `inertia-django`, 
`django-vite`, and `django-js-routes`.
1. Run 
```
django-admin startproject --template https://github.com/pmdevita/django-svelte-template/archive/master.zip my_django_project .
```
2. CD into `my_django_project/web` and run `npm i`

3. Run both Django and Vite (`python manage.py runserver` and `npm run dev`) and visit Django's URL http://127.0.0.1:8000

## Optional: Enable SSR

SSR support is still unpolished in inertia-django, but it is possible to get running. You technically *can* 
use SSR and HMR together, but you'll have to rebuild the SSR server on every change. Because of this, 
you might just want to use static builds of your site (`npm run build`).

First, we need to build the SSR server application by running `npm run build-ssr`. You can find some 
more info about Vite SSR [here](https://vitejs.dev/guide/ssr.html). The port can be changed
in `web/src/ssr.js`.

1. In `web/vite.config.js`, set `hydratable` to `true`.
2. In `your_django_project/settings.py`, set `INERTIA_SSR_ENABLED` to True (and if you are just using
static builds, set `DJANGO_VITE_DEV_MODE` to False)
3. After building the SSR server, run it (ex. with current directory in `web`, `node dist-ssr/ssr.js`)
4. Run Django


