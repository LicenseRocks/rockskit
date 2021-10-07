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

## Customizations ✍️

We have a pre-defined theme object in Rockskit, which is based on the License Rocks design system. It has pre-defined colors, fonts, font sizes, etc; and can be overriden in any project which RocksKit is used. We can replace colors and fonts easily just by modifying this object and no other pain.
