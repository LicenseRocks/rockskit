module.exports = {
  stories: ["../src/**/*stories.js"],
  staticDirs: ["../.storybook/.static"],
  addons: [
    "@storybook/addon-knobs/preset",
    "@storybook/addon-actions/preset",
    "@storybook/addon-viewport/register",
    "@storybook/addon-docs",
  ],
};
