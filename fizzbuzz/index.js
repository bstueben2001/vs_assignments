for(let i = 0; i <= 100; i++){
    // console.log(i)
if(i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz")
    } else if(i % 3 === 0) {
        console.log("fizz")
    } else if(i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}



//tally function pseudocode

//const tallyObj = {}
//let fizzCount = count [i] if === "fizz"
//push fizzCount > tallyObj
//let buzzCount = count [i] if === "buzz"
//push buzzCount > tallyObj
//let fizzBuzzCount = count [i] if === "fizzbuzz"
//push fizzBuzzCount > tallyObj
//console.log(tallyObj)
