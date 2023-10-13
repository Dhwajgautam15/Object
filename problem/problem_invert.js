function invert(obj) {
    let invertedObj = {};

    for(var prop in obj){
        invertedObj[obj[prop]] = prop;
    }
    return invertedObj;
}

module.exports=invert;