module.exports = {
  presets: ["@babel/preset-react", ["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
      },
    ],
    "babel-plugin-styled-components",
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        "@babel/preset-react",
      ],
    },
  },
};
