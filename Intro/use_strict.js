// "use strict";
var a=10;
console.log(a)

function add(){
    "use strict";
    var b = 20;
    // console.log(a+b)
    return b
}
function add1(a,b){
    // "use strict"
    return a+b+b
}
console.log(add1(a,add()))
add()
// console.log('Hello')