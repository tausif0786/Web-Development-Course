let a = 6


function Factorial(num){
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c
}

console.log(Factorial(a))