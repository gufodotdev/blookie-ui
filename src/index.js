const plugin = require("tailwindcss/plugin");
const formReset = require("@tailwindcss/forms");

const base = require("./base");
const theme = require("./theme");

const container = require("./components/container");
const button = require("./components/button");
const tabs = require("./components/tabs");
const table = require("./components/table");
const card = require("./components/card");
const link = require("./components/link");
const dialog = require("./components/dialog");
const dropdownMenu = require("./components/dropdown-menu");
const form = require("./components/form");
const label = require("./components/label");
const drawer = require("./components/drawer");
const badge = require("./components/badge");

module.exports = plugin(
  function (context) {
    formReset({ strategy: "class" }).handler(context);

    const { addBase, addComponents } = context;

    addBase({
      ...base,
    });

    addComponents({
      ...badge,
      ...button,
      ...card,
      ...container,
      ...dialog,
      ...drawer,
      ...dropdownMenu,
      ...form,
      ...label,
      ...link,
      ...table,
      ...tabs,
    });
  },
  {
    darkMode: ["class"],
    ...theme,
    corePlugins: {
      container: false,
    },
  }
);
