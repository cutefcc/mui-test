module.exports = {
  setupFiles: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom", // default: jsdom, 可配置： node
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
