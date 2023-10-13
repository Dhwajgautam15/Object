const {mapObject,cb} = require("../problem/problem_mapObject");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const result = mapObject(testObject,cb)
console.log(result)