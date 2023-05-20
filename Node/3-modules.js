// Modules - encapsulated code (only share minimum)
// CommonJS - every file is module (by default)



const names = require('./4-names')
const sayHI = require('./5-utils')
const chicken = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHI('susan')
sayHI(names.john)
sayHI(names.peter)
