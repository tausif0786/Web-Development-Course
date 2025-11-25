let random = Math.random()
console.log(random)

let a = prompt("Enter first number = ")
let c = prompt("Enter the operation to be performed")
let b = prompt("Enter second number = ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
    console.log('Theb result is ${a} ${c} ${b}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


// let my_name = "Tausif"
// let friend = "Kamesh"

// console.log(`My name is ${my_name} and my friend's name is ${friend}`)
