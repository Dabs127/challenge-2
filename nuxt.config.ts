// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxt/content"],
  extends: ['./privacy-app'],
  components: [
    {
      path: "~/partials",
      extensions: [".vue"],
    },
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  nitro: {
    prerender: {
      routes: ["/"],
    }
  },
  hooks: {
    async "prerender:routes"(ctx) {
      // This hook is called before prerendering routes
      // You can use it to modify the routes or perform actions before prerendering
      console.log("Prerendering routes:", ctx.routes);
      // Example: You can add a custom route or modify existing ones
      // ctx.routes.push("/custom-route");
    },
    
  }
});