const tsconf = require('./tsconfig.json')

const resolveAlias = () => {
  const path = tsconf.compilerOptions.paths
  const paths = Object.keys(path)
  return paths.reduce((obj, key) => {
    const newKey = key.replace(/\*$/, '(.*)$')
    obj[newKey] = `<rootDir>/${path[key][0].replace(/\*$/, '$1')}`
    return obj
  }, {})
}

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    ...resolveAlias(),
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
}
