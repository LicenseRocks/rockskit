## How to go through process of builiding and packaging RocksKit? 🧑🏻‍💻

We use Rollup for this process. It is configured in a way to use Babel to transpile the code and export the package in two formats: ESModules and CommonJS.
All exports in the project are named export. (they can be improved later to enhance Tree Shaking)

### Updating exising components 📲

1. Update the component code and make sure everything is working, at least in Storybook. If needed, update the code of component story in `stories.js` file.
2. Begin the building process by running `yarn build` and make sure, that build phase passes successfully, and we have updated files in `dist` directory.
3. Update the version of package either manually (in `package.json`, under `version` key) or using `npm version` (better to do it manually).
4. Make sure you have access to `@licenserocks` packages using your npm account, and you are logged in (in your CLI). If not — run `npm login` to complete authentication process. For more information about how to login to NPM, visit this link: https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line .
5. Now run `npm publish`.
6. Commit your changes and push to Github repository.

### Creating new components 📱

1. Be sure to check out the structure of the already created component of your choice. Smart approach would be to copy the whole folder of that component, so you would have a boilerplate to work with.
2. You'll need to export your component in corresponding `index.js` files. Let's take for example `Input.js` component under `src/Form/Input/`. It's exported from `index.js` in `src/Form/Input` folder itself (obviously). Then whole `src/Form/Input` folder is exported in `index.js` in `src/Form` folder. There is also `src/Form` folder exported in `index.js` in `src` folder. It's very important to include all of these exports, otherwise your component won't work.
3. From this point - go through steps from `Updating exising components 📲` section above for publishing your component.

That's all! 🚀

## Customizations ✍️

We have a pre-defined theme object in Rockskit, which is based on the License Rocks design system. It has pre-defined colors, fonts, font sizes, etc; and can be overriden in any project which RocksKit is used. We can replace colors and fonts easily just by modifying this object and no other pain.
