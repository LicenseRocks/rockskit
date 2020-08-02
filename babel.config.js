module.exports = {
  presets: ["@babel/react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "styled-components",
      {
        displayName: true,
        ssr: true,
      },
    ],
  ],
  env: {
    build: {
      presets: [
        [
          "@babel/env",
          {
            modules: false,
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
    },
  },
};
