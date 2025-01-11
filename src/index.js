const plugin = require("tailwindcss/plugin");
const base = require("./base");
const theme = require("./theme");
const container = require("./components/container");

module.exports = plugin(
  function ({ addBase, addComponents }) {
    addBase({
      ...base,
    });
    addComponents({
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
