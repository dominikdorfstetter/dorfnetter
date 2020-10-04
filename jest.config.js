module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    // replace gatsby library with our mock
    "^gatsby$": `<rootDir>/__mocks__/gatsby.js`,
    "@app/(.*)": "<rootDir>/src/$1",
    "@layouts/(.*)": "<rootDir>/src/layouts/$1",
    "@templates/(.*)": "<rootDir>/src/templates/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@types/(.*)": "<rootDir>/src/types/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1"
  },
  "transformIgnorePatterns": [`node_modules/(?!(gatsby)/)`],
  "globals": {
    __PATH_PREFIX__: ``,
  },
  "testURL": `http://localhost`,
  "setupFiles": [`<rootDir>/loadershim.js`],
  "testMatch": [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  }
}

