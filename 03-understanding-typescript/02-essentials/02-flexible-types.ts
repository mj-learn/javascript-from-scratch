// any type
let age: any = 36;
age = '36';
age = true;

console.log(typeof age);

let anyArray: any[] = [1, '2', true];
anyArray.push(4);
anyArray.push('5');
anyArray.push(false);

console.log(anyArray);

// union type
let unionType: number | string;
unionType = 36;
unionType = '36';
//unionType = true; // error because union type can be only number or string

console.log(typeof unionType);

// union type array
let unionTypeArray: (number | string)[] = [1, '2'];
unionTypeArray.push(4);
unionTypeArray.push('5');
//unionTypeArray.push(false); // error because union type array can be only number or string