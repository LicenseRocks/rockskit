<p align="center">
  <img src="https://license.rocks/wp-content/uploads/2020/08/logo-horizontal.png" width="350">
</p>

## What is RocksKit? 🚀

RocksKit is a license.rocks GmbH design system components for React.js.

As there are multiple projects in the company, which all of them are sharing the same design, we decided to have a component library to be used across all of those projects, so that it is possible to keep consistency along them.

## Main libraries/technologies used in Rockskit: 🦾

Below you can find main libraries/technologies which we have used in Rockskit.
All other libraries are used by basing on design needs. Moreover, there are examples (stories) for almost all components's usage in Storybook, and if not, you can find usage in one of the projects, in which they are used (CreatorsHub or MetaProof).

##

<div align="center">
  <a href="https://github.com/storybookjs">
    <img src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png" alt="Storybook" height="110" width="500"/>
  </a>
  <a href="https://github.com/styled-components">
    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
  </a>
</div>

<div align="center">
  <a href="https://github.com/mui-org">
    <img width="150" src="https://mui.com/static/logo.svg" alt="MUI logo" height="150px">
  </a>
  <a href="https://github.com/react-hook-form">
    <img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" height="150px"/>
  </a>
</div>

##

- Storybook 👉 Shortly, it is a development playground. We use it as an environment for components development. Also we build and deploy it to Github Pages as a showcase for the components we have.
- Styled-Components 👉 CSS-in-JS library which we use to make style neatly arranged through every component
- Material-UI 👉 Most of the components are built on top of MUI, it lets us save significant amount of time, since we do not need to write everything from scratch
- React-Hook-Form 👉 Form elements are implemented in a way to be compatible with RHF, as it's one of the best form libraries for React.

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

We have a pre-defined theme object in Rockskit, which is based on the License Rocks design system. It has pre-defined colors, fonts, font sizes, etc; and can be overriden in any project which RocksKit is used. We can replace colors and fonts easily just by modifying this object and no other pain.

## How to go through process of builiding and packaging RocksKit? 🧑🏻‍💻

We use Rollup for this process. It is configured in a way to use Babel to transpile the code and export the package in two formats: ESModules and CommonJS.
All exports in the project are named export. (they can be improved later to enhance Tree Shaking)

Now imagine we want to update a code in one of the components:

1. Update the component code and make sure everything is working, at least in Storybook. If needed, update the code of component story in `stories.js` file.
2. Update tests by running `yarn test:snapshot:update`
3. Begin the building process by running `yarn build` and make sure, that build phase passes successfully and we have updated files in `dist` directory.
4. Update the version of package either manually or using `npm version` (better to do it manually).
5. Make sure you have an access to @licenserocks packages using your npm account, then run `npm login` to complete authentication process.
6. Now run `npm publish`. Keep in mind that you should have configured your npm CLI before running this command. Then use `npm login` to login into your account. For more information about how to login to NPM, visit this link: https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line .
7. Commit your changes and push to Github repository.

That's all!🚀

## Running Rockskit Locally 🏡

To run Rockskit with full view through storybook on localhost, follow steps below 👇

1. Clone repo to your machine, by running `git clone <remote url>`
2. Install dependencies by running `yarn`
3. Run on your local by `yarn start-storybook`

You can start creating new components now 😉

## Publishing

1. `npm version`
2. `npm publish`

_NOTE: the storybook static site will be built each time a commit lands on main branch_

## Testing 📈

You can run tests by command `yarn test`

`yarn test` command looks for all files with `*.stories.js` in the project and creates snapshots of them, which are stored in `__snapshots__` folder.

⚠️ Remember to update tests after making changes in the project `yarn test:snapshot:update` ⚠️

## Configuration ⚙️

If it is super important to change some configurations for Babel or Rollup, it can be done carefully by editing `rollup.config.js` and `babel.config.js` files.

## Good practices 😍

It is extremely important to follow some good habits in Rockskit developing process:

1. Make sure that a component which you create is "reusable". It means, that it should not be used only once for the specific part of an app. Those kinds of components is better to implement inside of a project, in which it could be imported. This way, it’s easier to develop and debug the component and there is no need to update and publish entire RocksKit. On the other hand, if there will be a need to use this concrete component in multiple ways, we can easily copy and paste the code from the project into Rockskit and publish it.
2. Before implementing any new component, it is crucial to conscientiously go through others "ready" components in codebase. Most of the components are already implemented, if it is possible, always try build new one from existing ones. Example is presented below 👇

```jsx
import React from "react";
// Existing components and Typography used to build new one
import { Icon, Button, H5 } from "..";

export const Alert = ({ content, text, buttonContent, ...props }) => {
  const StyledMessage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `;

  return (
    <StyledMessage {...props}>
      <Icon icon="info-circle" mr={2} />
      <H5 content={text} />
      <Button size={"sm"} content={buttonContent} />
    </StyledMessage>
  );
};
```

In this simple example, we built an `Alert` using existing `Icon`, `Button` components and also ready `H5` Typography. It is the most optimal way of implementing new stuff 😉

4. `${(theme) => SPACER(theme)} / ${(theme) => DISPLAY(theme)}` should be used only on the styles of the top level components (the component which is finally exported from RocksKit). It is crucial, because they are responsible for adding paddings, margins and displays to the top level component just by passing props to it. In example below is represented an Alert component 👇

```jsx
import React from "react";
import styled, { useTheme } from "styled-components";
import { DISPLAY, SPACER } from "..";

const StyledMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Alert = ({ content, children, ...props }) => {
  const theme = useTheme();

  return <StyledMessage {...props}>{content || children}</StyledMessage>;
};
```

In this case, when we import an `Alert` component, we can `add margin-bottom` by passing a prop `<Alert mb={2} />`, which leads in this scenario to a margin-bottom of 8px, because 2 is multiplied with our standard spacing multiplier which is 4 (2x4=8).

6. Try to have different properties which will be stored in database always in lowercase, so that it can be easier and more performant to use them.
7. Always use `theme` variables for colors, fonts, margins, paddings, etc. There are lots of customizations and all of theme are based on these variables. Below is shown example of styling part 👇

```jsx
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.palette.gray.semiLight};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;
```

`background` is defined by using `theme` variable, you can find those variables in `/src/theme`

9. Name new components wisely, these created as parents as well as these created as children using Styled-Components.
10. Create example data and pass them as props in proper `stories.js` file. Example for `Footer` is presented below 👇

```jsx
import React, { useState } from "react";
import { StoryWrapper } from "../../.storybook/decorators";
// Components
import { Footer } from "./Footer";

export default {
  title: "App",
  component: App,
  decorators: [StoryWrapper],
};

// data for footer
const data = [
  {
    id: 1,
    status: "required",
  },
  {
    id: 2,
    status: "optional",
  },
];

const BaseComponent = (props) => {
  return (
    <>
      <Footer data={data} />
    </>
  );
};

export const main = () => <BaseComponent />;
```

11. Adding new icons

Considering size and performance reasons, it is possible to use only icons which are added in `theme/icons/solid.js`. If there is a need to use not available icon, just import it from `FontAwesome library` into mentioned above `solid.js` file
