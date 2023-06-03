module.exports = {
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
        },
    },
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
    },
    moduleDirectories: [
        "<rootDir>",
        "src",
        "node_modules"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom'
}