const fs = require('fs-extra')
const srcDir = 'wabt/demo'
const dstDir = 'src'
const exportStr = `
module.exports = { wasm: wabt, Module: Module }
`

fs.copySync(`${__dirname}/${srcDir}`, `${__dirname}/${dstDir}`)
let file = fs.readFileSync(`${__dirname}/${dstDir}/libwabt.js`).toString()
// shim hte file loading to work both in the browser and node
file = file.replace('"libwasm.js.mem"', 'process.browser ? `src/libwasm.js.mem` : `${__dirname}/libwasm.js.mem`')
// make the preomis return the object
file = file.replace('resolve()', 'resolve(wabt)')
fs.writeFileSync(`${__dirname}/${dstDir}/libwabt.js`, file)
fs.appendFile(`${__dirname}/${dstDir}/libwabt.js`, exportStr)
