module.exports = function reverse (x) {
    var str = x.toString(); 
    var strArray = str.split(""); 
    var revArray = strArray.reverse(); 
    var rev = revArray.join(""); 
    return parseInt(rev);
}
