const { override, addLessLoader } = require('customize-cra')
const { addPostcssPlugins } = require('./addPostcssPlugins')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@base-color': '#f44336'
      }
    }
  }),
  addPostcssPlugins([
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('postcss-custom-properties'),
    require('postcss-preset-env')({ stage: 1 }),
    require('autoprefixer')
  ])
)
