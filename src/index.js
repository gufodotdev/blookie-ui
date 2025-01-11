const plugin = require("tailwindcss/plugin");
const base = require("./base");
const theme = require("./theme");

module.exports = plugin(
  function ({ addBase }) {
    addBase({
      ...base,
    });
  },
  {
    ...theme,
  }
);
