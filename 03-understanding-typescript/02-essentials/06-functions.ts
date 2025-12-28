// function with parameters type number and return type number
function add(a: number, b: number): number {
    // return (a + b).toString(); // this is not valid because return type is number
    return a + b;
}

console.log(add(1, 2));

// function with parameters type number and return type string
function add2(a: number, b: number): string {
    // return a + b; // error because return type is string but return type is number
    return (a + b).toString(); // this is valid because return type is string
}

console.log(add2(1, 2));

// return type void ------------------------------------------------------------

// function with return type void
function add3(a: number, b: number): void {
    console.log(a + b);
    // return 1; // error because return type is void
    // return undefined; // this is valid because return type is void
    // return null; // this is valid because return type is void
}

console.log(add3(1, 2));

// return type never ------------------------------------------------------------

// function with return type never
function generateError(message: string): never {
    throw new Error(message);
    // return undefined; // this is not valid because return type is never
    // return null; // this is not valid because return type is never
}

console.log(generateError('An error occurred'));

// function with return type never
function generateError2(message: string): never {
    while (true) {
        console.log(message);
    }
}

// functions with parameters of type Function ------------------------------------

// function with parameter type Function (any function)
function logMessage(msg: Function) {
    // ... some logic ...
    msg();
}

// function with parameter type () => void (any function that returns void)
// this is not javascript anonymous function, this is a function type
function preformAction(msg: () => void) {
    // ... some logic ...
    msg();
}

function preformAction2(msg: (param: string) => void) {
    // ... some logic ...
    // msg(); // error because the function needs a parameter
    // msg(1); // error because the function parameter is string
    msg('Hello, world!');
}