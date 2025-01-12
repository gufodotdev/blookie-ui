const plugin = require("tailwindcss/plugin");
const base = require("./base");
const theme = require("./theme");
const container = require("./components/container");
const button = require("./components/button");

module.exports = plugin(
  function ({ addBase, addComponents }) {
    addBase({
      ...base,
    });
    addComponents({
      ...button,
      ...container,
    });
  },
  {
    ...theme,
    corePlugins: {
      container: false,
    },
  }
);
