// function init(){
//     let name = "Anas"
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
// }
// init()


function outer (){
    let username = "Muhamamd anas"
    // console.log("mysercertt" , secret)
    function inner (){
        let secret = "My123"
        console.log("inner",username)

    }
    function innerTwo(){
        // console.log("secret===========>",secret)
        console.log("function inner two user name",username)
    }
    inner()
    innerTwo()
}
outer()


// var sum = function (a){
//     console.log("Hello world" , a)
//     var c = 4
//     return function (b){
//         return a+b+c
//     }
// }
// let store = sum(200)
// console.log("🚀 ~ store:", store)
// console.log("🚀 ~ store:", store(5))
// console.log("🚀 ~ store:", store)
// console.log("🚀 ~ store:", store)
// console.log(a)

// console.log("TO OUTER FUNCTIONS",username)

var sum = function(a,b,c){
    return {
        getSumTwo : function(){
            return a+b
        },
        getSumThree : function(){
           return a+b+c  //main
        }
    }
}
var Store = sum(3,4,5)
console.log("🚀 ~ Store:", Store.getSumTwo())
console.log("🚀 ~ Store:", Store.getSumThree())
