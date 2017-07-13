var validAttr = require('./validAttr')

module.exports = function (props) {
  return Object
    .keys(props)
    .reduce((acc, propName) => {
      if (validAttr(propName)) {
        acc[propName] = props[propName]
      }

      return acc
    }, {})
}
