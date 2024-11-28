const accountId = 1454984
let accountEmail = "hitesh@gmail.com"
var accountPassword =  "112345"
accountCity = "Jaipur"
let accountState;

// prefer not to use var Because of block scope issue  and functional scope.

// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity = "Bangluru"

console.log(accountEmail);
console.table([accountEmail,accountPassword,accountCity]);

