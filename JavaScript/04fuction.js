function sayMyName(a, b){
    if(a || b === NaN){
        console.log("enter num")
        return

    }
    const result = a+b
    return result
}

const result = sayMyName(3)

console.log("Result",result)



//Scope

let = 10
const b = 20
var c = 30 