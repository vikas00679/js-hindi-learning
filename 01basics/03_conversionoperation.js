let score = "34abc"


console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"     =>  33
// "33abc"  =>  NaN
//  true    =>  1  ; false => 0
// "hitesh" =>  NaN
//  null    =>  0


let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true  ; 0  => false
// ""       =>  false
// "Vikas"  =>  true


let someNumber = 44

let stringNumber = String(someNumber)
console.log(typeof stringNumber);