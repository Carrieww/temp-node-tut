// CommonJS, every file is module (by default)
// Modules - Encapsulated COde (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
require('./7-mind-grenade') //"Just require a module" will invoke functions called/executed in 7-mind-grenade. It is not about export.

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
