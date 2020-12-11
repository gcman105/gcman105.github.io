// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// gridsome.config.js
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Gridsome",
  siteUrl: 'https://gcman105.github.io',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
