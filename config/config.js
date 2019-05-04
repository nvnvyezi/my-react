/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const devMode = 'production' !== process.env.NODE_ENV

module.exports = {
  PORT: 5000,
  ENTRY_PATH: path.resolve(__dirname, '../src/'),
  PACKAGE_PATH: path.resolve(__dirname, '../packages/'),
  ROOT_PATH: path.resolve(__dirname, '../'),
  OUTPUT_PATH: path.resolve(__dirname, '../dist/page'),
  DLL_OUTPUT_PATH: path.resolve(__dirname, '../dist/dll'),
  DLL_PATH: path.join(__dirname, '../dist/dll', 'vendor/[name]-manifest.json'),
  CLEAN_PATH: 'dist/page',
  DLL_CLEAN_PATH: 'dist/dll',
  FAVICON_PATH: path.resolve(__dirname, './favicon.ico'),
  ENTRY: { index: path.resolve(__dirname, '../src/index') },
  OUTPUT: {
    filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[chunkhash:8].js',
    publicPath: devMode ? '/' : './',
  },
}
