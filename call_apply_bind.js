// call method in js 




let userDetails = {
    name : "Anas",
    age : "12",
    Desgination : "Sofware Engineer",
   
}
 let printDetails = function(state,country){
        // if(this.name === "Abdullah riaz")
        console.log("=================>" ,)
        return `${this.name} ${state} ${country}`
    }
    // printDetails()
let userDetails1 = {
    name : "Abdullah riaz",
    age : "19",
    Desgination : "Sofware Engineer",
}
let newfun = printDetails.bind(userDetails1,"india","pakistani")
newfun()
// printDetails.call(userDetails1,["karachi","USA"])
// userDetails.printDetails.call(userDetails1)
// userDetails.printDetails.call(userDetails1)
// console.log(userDetails.printDetails())

// console.log("🚀 ~ a:", a())
console.log("🚀 ~ newfun:", newfun())





