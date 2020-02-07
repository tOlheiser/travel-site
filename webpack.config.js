const path = require('path')

const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

export const module = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i, //only if a file ends in '.css',
        use: ['style-loader', 'css-loader', {
          loader: 'post-css-loader', options: {plugins: postCSSPlugins}
        }] // use css-loader
      }
    ]
  }
}