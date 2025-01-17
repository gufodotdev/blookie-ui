const plugin = require("tailwindcss/plugin");
const base = require("./base");
const form = require("./form");
const theme = require("./theme");
const container = require("./components/container");
const button = require("./components/button");
const tabs = require("./components/tabs");
const table = require("./components/table");

module.exports = plugin(
  function ({ addBase, addComponents }) {
    addBase({
      ...base,
      ...form,
    });
    addComponents({
      ...button,
      ...container,
      ...table,
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
