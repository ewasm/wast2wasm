const fs = require('fs-extra')
const srcDir = 'wabt/demo'
const dstDir = 'src'
const exportStr = `
module.exports = { wasm: wasm, Module: Module }
`

fs.copySync(`${__dirname}/${srcDir}`, `${__dirname}/${dstDir}`)
let file = fs.readFileSync(`${__dirname}/${dstDir}/libwasm.js`).toString()
// shim hte file loading to work both in the browser and node
file = file.replace('"libwasm.js.mem"', 'process.browser ? `src/libwasm.js.mem` : `${__dirname}/libwasm.js.mem`')
// make the preomis return the object
file = file.replace('resolve()', 'resolve(wasm)')
fs.writeFileSync(`${__dirname}/${dstDir}/libwasm.js`, file)
fs.appendFile(`${__dirname}/${dstDir}/libwasm.js`, exportStr)
