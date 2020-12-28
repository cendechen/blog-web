module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    // 数据
    screens: {
      'sm': '544px',
      'md': '768px',
      'lg': '1012px',
      'xl': '1280px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
