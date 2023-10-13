function pairs(obj){
    let keyValue_pair = [];
    for(const prop in obj){
        keyValue_pair.push(prop,obj[prop]);
    }
    return keyValue_pair;
}

module.exports = pairs;