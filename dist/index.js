
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./periphery.cjs.production.min.js')
} else {
  module.exports = require('./periphery.cjs.development.js')
}
