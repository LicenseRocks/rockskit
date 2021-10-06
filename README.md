<p align="center">
  <img src="https://license.rocks/wp-content/uploads/2020/08/logo-horizontal.png" width="250">
</p>

<h1 align="center">RocksKit</h1>

## What is RocksKit? 🚀

RocksKit is license.rocks GmbH design system components for React.js.

As there are multiple projects in the company, which all of them are sharing the same design, we decided to have a component library to be used across all of those projects to keep consistency along them.

## Main libraries/technologies used in Rockskit: 🦾

Below you can find main libraries/technologies which we have used in Rockskit.
All other libraries are used by basing on design needs. Moreover, there are examples (stories) for almost all components's usage in Storybook, and if not, you can find usage in one of the projects, in which they are used (CreatorsHub or MetaProof).

<p align="center">
      <a href="https://github.com/storybookjs">
<img src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png" alt="Storybook" height="80" width="400"/>
        </a>
</p>

Shortly, it is a development playground. We use it as an environment for components development. Also we build and deploy it to Github Pages as a showcase for the components we have.

<p align="center">
    <a href="https://github.com/styled-components">
  <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="80px" />
     </a>
</p>

CSS-in-JS library which we use to make style neatly arranged through every component

<p align="center">
    <a href="https://github.com/mui-org">
  <img width="150" src="https://mui.com/static/logo.svg" alt="MUI logo" height="80px">
     </a>
</p>

Most of the components are built on top of MUI, it lets us save significant amount of time, since we do not need to write everything from scratch

<p align="center">
  <a href="https://github.com/react-hook-form">
    <img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" height="150px"/>
  </a>
</p>

Form elements are implemented in a way to be compatible with RHF, as it's one of the best form libs for React.

## How to use RocksKit? 🎮

1. Like you do for any other JS lib or package, just run `yarn add @licenserocks/kit`
2. Import the chosen component and use it in your application, below is represented the example usage of `Flex` component

```jsx
import React from "react";
import { Flex } from "@licenserocks/kit";

export const App = () => {
  return (
    <Flex container spacing={8}>
      {/* Some content */}
    </Flex>
  );
};
```

📝 Good practce: Visit a storybook for this project, and check which props you can pass to custom component.
👇 https://licenserocks.github.io/rockskit/

## Customizations ✍️

We have a pre-defined theme object in Rockskit, which is based on License Rocks design system. It has pre-defined colors, fonts, font sizes etc, and can be overriden in any project which RocksKit is used. We can replace colors and fonts easily just by modifying this object and no other pain.

## How to go through process of builiding and packaging RocksKit? 🧑🏻‍💻

We use Rollup for this process. It is configured in a way to use Babel to transpile the code and export the package in two formats: ESModules and CommonJS.
All exports in the project are named export. (they can be improved later to enhance Tree Shaking)

Now imagine we want to update a code in one of the components:

1. Update the component code and make sure everything is working, at least in Storybook. If needed, update the code of component story in `stories.js` file.
2. Update tests by running `yarn test:snapshot:update`
3. Begin the building process by running `yarn build` and make sure, that build phase passes successfully and we have updated files in `dist` directory.
4. Update the version of package either manually or using `npm version` (better to do it manually).
5. Make sure you have an access to @licenserocks packages using your npm account, then run `npm login` to complete authentication process.
6. Now run `npm publish`. Keep in mind that you should have configured you npm CLI before running this command. For that, you should login to npm and make sure you have access to @licenserocks packages using your account, and then use `npm login` to login into your account. For more information about how to login to NPM, visit this link: https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line .
7. Commit your changes and push to Github repository.

That's all!🚀

## Running Rockskit Locally 🏡

To run Rockskit with full view through storybook on localhost, follow steps below 👇

1. Clone repo to your machine, by running `git clone <remote url>`
2. Install dependencies by running `yarn`
3. Run on your local by `yarn start-storybook`

## Testing 📈

You can run tests by command `yarn test`

`yarn test` command looks for all files with `*.stories.js` in the project and creates snapshots of them, which are stored in `__snapshots__` folder.

⚠️ Remember to update tests after making changes in the project `yarn test:snapshot:update` ⚠️

## Configuration ⚙️

If it is super important to change some configurations for Babel or Rollup, it can be done carefully by editing `rollup.config.js` and `babel.config.js` files.

## Good practices 😍

It is extremely important to follow some good habits in Rockskit developing process:

1. Make sure that a component which you create is "reusable". It means, that it should not be used only once for the specific part of an app. Those kinds of components, are better to be implemented inside a project, in which it could be imported. This way, it’s easier to develop and debug the component and no need to update and publish entire RocksKit. On the other hand, if there will be a need to use this concrete component in multiple ways, we can easily copy and paste the code from the project into Rockskit and publish it.
2. Before implementing Please go through other components and codebase before implementing any new component. Most of the components are already implemented, or you can use existing ones to create the new one. In our current case (Inspector), we already have Modal, Accordion (Collapse), Text, Heading and you can easily combine them to achieve the Inspector component. You can use our Storybook and the stories codebase to see how they work.
3. ${(theme) => SPACER(theme)} / ${(theme) => DISPLAY(theme)} are only used on the styles of the top level components (the component which is finally exported from RocksKit) because they are responsible for adding paddings, margins and displays to the top level component just by passing props to it. In our case if we have the component Inspector, it would be like <Inspector mb={2} /> which leads to a margin-bottom of 8px because 2 is multiplied with our standard spacing multiplier which is 4 (2x4=8).
4. Try to have properties like status, color etc always in lowercase because we store them to database in lowercase and that way it’s more easier and performant when using them.
5. Always use theme variables for colors, fonts, margins, paddings, etc… because we have lots of customizations for different clients/customers and all these customizations are based on these variables.
6. Wisely name components.
7. Render Data in store.js
8. icons
