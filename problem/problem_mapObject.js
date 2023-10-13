function mapObject(obj, cb){
let result = {};

    for (const value in obj){
        result[value] = cb(obj[value]);
    }
    return result;
}

function cb(testObject){
    return testObject+"_hey"
}

module.exports = {mapObject,cb};