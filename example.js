const wast2wasm = require('.')
const wast = `
(module)
`
wast2wasm(wast, true).then(output => {
  console.log(output.buffer)
  console.log(output.log)
})
