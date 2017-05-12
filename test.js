const wast2wasm = require('.')
const tape = require('tape')
const wast = `
(module)
`
tape('testing', async t => {
  t.plan(1)
  const output = await wast2wasm(wast, true)
  const expected = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0])
  t.deepEquals(output.buffer, expected, 'should have correct output')
})
