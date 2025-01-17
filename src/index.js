const plugin = require("tailwindcss/plugin");
const base = require("./base");
const form = require("./form");
const theme = require("./theme");
const container = require("./components/container");
const button = require("./components/button");
const tabs = require("./components/tabs");

module.exports = plugin(
  function ({ addBase, addComponents }) {
    addBase({
      ...base,
      ...form,
    });
    addComponents({
      ...button,
      ...container,
      ...tabs,
    });
  },
  {
    ...theme,
    corePlugins: {
      container: false,
    },
  }
);
