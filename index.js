const wasm = require('./src/libwabt.js').wasm

/**
 * Translates from [s-expressions](https://github.com/WebAssembly/spec) to the WebAssembly [binary-encoding](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md)
 * @param {String} text the s-expression to convert
 * @param {Bool} log wether or not to produce a log
 * @return {Promise} which resolves an object with the property `buffer` for
 * for the compiled binary and `log` for the log
 */
module.exports = (text, log = false) => {
  return wasm.ready.then((wasm) => {
    const script = wasm.parseWast('test.wast', text)
    return script.toBinary({
      log: log
    })
  })
}
