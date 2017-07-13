var validAttr = require('./validAttr')

/**
 * Filter react component props to DOM safe attrs
 * @param {{}} props - React component props
 * @return {{}} - DOM safe attrs
 */
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
