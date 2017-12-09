# vue-website-cli

This tool allows you to put in place a static website powered by VueJS. 

If you are a VueJS developer, you can develop a static website in no time with the tools you love.

If you are integrator or website developer using static site generators like Jekyll, and or handle user actions with tools like jQuery and manipulate much DOM, you will be able to code your website as simple components (html, css). Just add some js implementing vuejs component module and you will add reactivity to your pages.

## how to use

### standard

First install the cli

```bash
npm i -g vue-website-cli
```

Just generate a new website and you're done!

```bash
vue-website generate my-website
```

An `npm run dev` will live reload your site, a `npm run build` will generate your static pages, embedding wuejs anyway for reactivity and user interaction.

### a little bit complicated

I you don't want this tool magic, you can use the [vue-website-template](https://github.com/code-forefront/vue-website-template) as a VueJS template (as an overload of the [vue webpack template](https://github.com/vuejs-templates/webpack)) on wich is added the [vue-website-plugins](https://github.com/code-forefront/vue-website-plugins).
