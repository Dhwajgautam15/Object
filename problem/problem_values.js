function values(obj){
    let allkeys=[];

    for(var value in obj){
        console.log(obj[value]);
    }
}

module.exports = values ;