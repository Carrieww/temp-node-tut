module.exports.items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

export default person // this is equivalent to module.exports = person 
// or we can write module.exports.person = {} here module.exports is an object, we are adding a property person to it
// if we export both items and person, then when 
// const data = require('./6-alternative-flavor')
// we will get data = {items:['item1', 'item2'], person: {name: 'bob'}}
// 先后顺序是按照我们export的顺序
// This is the same as in 4-names module.exports = {items, person}
