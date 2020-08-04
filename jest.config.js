module.exports = {
  cacheDirectory: ".cache/jest",
  clearMocks: true,
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/fileMock.js",
  },
  roots: ["<rootDir>/src"],
  testMatch: ["<rootDir>/src/*.test.js"],
  setupFiles: ["<rootDir>/.jest/jest.init.js"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTestAfterEnv.js"],
  transformIgnorePatterns: ["/node_modules/(?!(@babel/runtime)/).*/", "/dist/"],
};
