// objects
let person: {
    name: string;
    age: number
} = {
    name: 'Max',
    age: 30
};

person.name = 'Manu';
person.age = 31;

console.log(person);

// arrays of objects
let people: { name: string; age: number }[] = [{ name: 'Max', age: 30 }, { name: 'Sarah', age: 31 }];
people.push({ name: 'John', age: 32 });

console.log(people);

// type must be "not be null" type
let val: {}; // this is not empty object, this must "not be null" type
val = 0;
val = 'something';
val = true;
// val = null // error because val cant be null
// val = undefined; // error because val cant be undefined

// type must be object
const emptyObject = {} // this is empty object
let data: Record<string, number>; // this is object with string key and number value
data = {
    'a': 1,
    'b': 2,
    'c': 3
};

// this is object with string or number key and string or number value
let data2: Record<string | number, string | number>;
data2 = {
    'a': 1,
    2: 'a',
};

