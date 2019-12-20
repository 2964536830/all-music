const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages/'),
      'components': resolve('src/components/'),
      'js': resolve('src/js/'),
      'images': resolve('src/images/')
    }
  }
}
