# SYNOPSIS 
[![NPM Package](https://img.shields.io/npm/v/wast2wasm.svg?style=flat-square)](https://www.npmjs.org/package/wast2wasm)
[![Build Status](https://img.shields.io/travis/ewasm/wast2wasm.svg?branch=master&style=flat-square)](https://travis-ci.org/ewasm/wast2wasm)
Translates from [s-expressions](https://github.com/WebAssembly/spec) to the WebAssembly [binary-encoding](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md). It wraps wabt's [wast2wasm](https://github.com/WebAssembly/wabt)

# INSTALL
`npm install wast2wasm`

# USAGE

```javascript
const wast2wasm = require('wast2wasm')

const wast = `
(module)
`
wast2wasm(wast, true).then(output => {
  console.log(output.buffer)
  // Uint8Array [ 0, 97, 115, 109, 13, 0, 0, 0 ]
  console.log(output.log)
  // 0000000: 0061 736d                                 ; WASM_BINARY_MAGIC
  // 0000004: 0d00 0000                                 ; WASM_BINARY_VERSION
})

```

# API
**Parameters**

-   `text` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the s-expression to convert
-   `log` **\[Bool](default false)** wether or not to produce a log

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** which resolves an object with the property `buffer` for
for the compiled binary and `log` for the log

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
