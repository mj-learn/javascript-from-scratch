let userName: string;
let age = 30;
userName = 'Max';
// userName = true; // error because userName is a string

console.log(typeof userName);
console.log(typeof age);

function add(a: number, b = 5) {
    return a + b;
}

console.log('Result is: ' + add(1, 2));
console.log('Result is: ' + add(4));
//console.log('Result is: ' + add(1, '2')); // error because add function expects a number
//console.log('Result is: ' + add("4")); // error because add function expects a number