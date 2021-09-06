## What is RocksKit?

RocksKit is license.rocks GmbH design system components for React.js.

As there are multiple projects in the company which all of them are sharing the same design, we decided to have a component library to be used across all of those projects to keep consistency along them.

Main libraries/technologies used in Rockskit:

- Storybook: Development playground. We use it as an environment for components development. Also we build and deploy it to Github Pages as a showcase for the components we have.
- Styled Components: CSS-in-JS library we use
- Material UI: Most of the components are built on top of MUI
- React Hook Form: Form elements are implemented in a way to be compatible with RHF as it's one of the best form libs for React.

All other libraries are used based on design needs.

There are examples (stories) for almost all components's usage in Storybook, and if not, you can find usage in one of the projects they are used in like CreatorsHub or MetaProof.

## How to use RocksKit?

Like you do for any other JS lib or package, just run `yarn add @licenserocks/kit`

## What is the process of builiding and packaging of RocksKit?

We use Rollup for this process. It is configured in a way to use Babel to transpile the code and export the package in two formats: ESModules and CommonJS.

All exports in the project are named export. (they can be improved later to enhance Tree Shaking)

Now imagine we want to update a code in one of the components:

1. Update the component code and make sure everything is working at least in Storybook. If needed, update the code of component story in `stories.js` file.
2. Run `yarn build` and make sure build phase passes successfully and we have updated files in `dist` directory.
3. Update the version of package either manually or using `npm version` (better to do it manually).
4. Now run `npm publish`. Keep in mind that you should have configured you npm CLI before running this command. For that, you should login to npm and make sure you have access to @licenserocks packages using your account, and then use `npm login` to login into your account. For more information about how to login to NPM, visit this link: https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line .
5. Commit your changes and push to Github repository.

That's all!

## Customizations

We have a pre-defined theme object in Rockskit which is based on License Rocks design system. It has pre-defined colors, fonts, font sizes etc, and can be overriden in any project which RocksKit is used. We can replace colors and fonts easily just by modifying this object and no other pain.
