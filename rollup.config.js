import path from "path";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "styled-components": "styled",
};

const baseConfig = {
  input: path.resolve(__dirname, "src", "index.js"),
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve(),
    image(),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: /node_modules/,
    }),
  ],
};

const CommonJS = {
  ...baseConfig,
  output: {
    globals,
    file: pkg.main,
    format: "cjs",
    sourcemap: true,
  },
};

const ESModules = {
  ...baseConfig,
  output: {
    globals,
    file: pkg.module,
    format: "es",
    sourcemap: true,
  },
};

module.exports = [CommonJS, ESModules];
