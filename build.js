const fs = require('fs-extra')
const srcDir = 'wabt/demo'
const dstDir = 'src'

fs.copySync(`${__dirname}/${srcDir}`, `${__dirname}/${dstDir}`)
