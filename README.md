# React DOM Attrs

A filter pick react known dom attrs from props. Help you avoid [React Unknown Prop Warning](https://facebook.github.io/react/warnings/unknown-prop.html)

```
npm install --save react-dom-attrs
```

OR

```
yarn add react-dom-attrs
```

[![npm](https://img.shields.io/npm/v/react-dom-attrs.svg)](https://www.npmjs.com/package/react-dom-attrs)
![module formats: cjs](https://img.shields.io/badge/module%20formats-cjs-green.svg)

## Example

```js
const domAttrs = require('react-dom-attrs')

const Card = props => {
  const { className, firstName, lastName, ...rest } = props

  // 'lol' in rest
  const attrs = domAttrs(rest)
  // 'lol' removed but width and height leave there

  return (
    <div
      className={className}
      {...attrs}
    >
      Full Name: {firstName} {lastName}
    </div>
  )
}

const App = () => (
  <Card
    className='card'
    firstName='Joe'
    lastName='Dan'
    width={100}
    height={50}
    lol='a cat jump on my keyboard'
  >
)
```

## Acknowledgements

The attr list used by this project come from [styled-components](https://github.com/styled-components/styled-components). We'd like to thank styled components team ideas, code or inspiration.
