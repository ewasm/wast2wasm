const libwabt = require('./src/libwabt.js')

/**
 * Translates from [s-expressions](https://github.com/WebAssembly/spec) to the WebAssembly [binary-encoding](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md)
 * @param {String} text the s-expression to convert
 * @param {Bool} log wether or not to produce a log
 * @return {Promise} which resolves an object with the property `buffer` for
 * for the compiled binary and `log` for the log
 */
module.exports = (text, log = false, debug = false) => {
  return libwabt.ready.then(() => {
    const wabtModule = libwabt.parseWat('test.wast', text)
    wabtModule.resolveNames()
    wabtModule.validate()
    const resultBuf = wabtModule.toBinary({
      log: log,
      write_debug_names: debug
    })
    wabtModule.destroy()
    return resultBuf
  })
}
