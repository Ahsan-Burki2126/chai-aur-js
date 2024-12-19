const userId = "199991"
let userName = "ahsan burki"
var userEmail = "ahsan@gmail.com"

uCanNameWithoutDataTypeInJs = "this is amazing"

let thisIsAlsoAmazing;

/*
You should avoid using `var` in JavaScript because it has some issues that can lead to unexpected bugs. Unlike `let` and `const`, `var` has *function scope* instead of *block scope*, meaning it can be accessed outside of the block where it was declared. This can cause variables to be accidentally overwritten or accessed before they are defined due to *hoisting*, where `var` declarations are moved to the top of their scope. Using `let` or `const` provides better scoping rules, avoids accidental re-declarations, and makes the code more predictable and easier to debug.
*/

console.table([userId,userEmail,uCanNameWithoutDataTypeInJs,thisIsAlsoAmazing]);