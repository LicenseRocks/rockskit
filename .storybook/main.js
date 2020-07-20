const path = require("path");

module.exports = {
  stories: ["../src/**/*stories.js"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport/register",
  ],
};
