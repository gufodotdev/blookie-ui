const plugin = require("tailwindcss/plugin");
const formReset = require("@tailwindcss/forms");

const base = require("./base");
const form = require("./form");
const theme = require("./theme");

const container = require("./components/container");
const button = require("./components/button");
const tabs = require("./components/tabs");
const table = require("./components/table");
const card = require("./components/card");
const link = require("./components/link");
const dialog = require("./components/dialog");
const dropdownMenu = require("./components/dropdown-menu");

module.exports = plugin(
  function (context) {
    formReset().handler(context);

    const { addBase, addComponents } = context;

    addBase({
      ...base,
      ...form,
    });

    addComponents({
      ...button,
      ...card,
      ...container,
      ...dialog,
      ...dropdownMenu,
      ...link,
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
