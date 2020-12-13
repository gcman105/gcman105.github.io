const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "gcman105",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};