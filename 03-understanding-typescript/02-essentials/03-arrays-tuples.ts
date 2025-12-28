// arrays
let hobbies: string[] = ['Sports', 'Cooking'];
hobbies.push('Reading');
//hobbies.push(10); // error because hobbies is an array of strings

console.log(hobbies);

let users: Array<number | string>; // generic type
users = [1, 'Max'];
users = ['Max', 'Sarah'];
users = [1, 2, 'John'];

console.log(users);

let users2: (number | string)[];
users2 = [1, 'Max'];
users2 = ['Max', 'Sarah'];
users2 = [1, 2, 'John'];

console.log(users2);

// tuples
let person: [string, number];
person = ['Max', 30];
// person = [30, 'Max']; // error 
// person = ['Sarah', 31, 22]; // error because the tuple has only two elements

console.log(person);

// tuples array
let people: [string, number][] = [['Max', 30], ['Sarah', 31], ['John', 32]];
people.push(['Jane', 33]);

console.log(people);