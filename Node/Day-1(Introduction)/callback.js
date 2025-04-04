
// Callback function

//  I Will Call back

// Used to handle Async 

//  Passing one function into another function as a argument
// Execute one function into another function
// i.e One function execute after another function finish their execution


console.log("Welcome To Node JS");



function B(callback) {

    callback()
    console.log("Hello Function B")
}

B(function A() {
    console.log("Hello Function A")
}
)
// *******************************************

// Eg
// const arr=[
//     {

//     },
//     {

//     }
// ]
// arr.map(()=>{

// })


// **************************************************************

// Higher Order Function


// One function return another function


function X(a) {
    return function Y(b) {
        console.log(a * b)
    }
}

X(10)(20)

