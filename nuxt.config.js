const environment = {
  BASE_URL: "https://apis.demodesigntemplates.com/public/api/",
  // BASE_URL: "http://127.0.0.1:8000/api/",
}
export default {
  target: "static",
  head: {
    title: "Home | Heathrow London Limos",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: "./assets/styles/style.css" },],
    script: [
      {
        src: "https://use.fontawesome.com/3af70af034.js",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js",
      },
    ],
  },

  css: [
    "./assets/styles/style.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
  ],

  plugins: [
    "~/plugins/axios.js",
    "~/plugins/slick.js",
    "~/plugins/select2.js",
  ],

  components: true,

  buildModules: [],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "sweetalert",
  ],
  axios: {
    Proxy: true,
    baseURL: environment.BASE_URL
  },

  Proxy: [
    ['location', { target: environment.BASE_URL + 'locations' }]
    ['get_all_vehicles', { target: environment.BASE_URL + 'get_all_vehicles' }]
  ],


  build: {},
  generate: {
    crawler: false, //turn on when live
  },
};
