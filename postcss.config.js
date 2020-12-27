module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('postcss-custom-properties'),
    require('postcss-preset-env')({ stage: 1 }),
    require('autoprefixer')
  ]
}
