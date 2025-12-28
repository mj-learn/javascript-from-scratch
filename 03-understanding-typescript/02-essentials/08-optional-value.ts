// function with optional parameter
function generateError(message?: string) {
    throw new Error(message);
}

generateError('An error occurred');
generateError(); // this is valid because the function has an optional parameter

// object type with optional properties
type User = {
    name: string;
    age: number;
    // ? means the property is optional
    role?: 'admin' | 'guest'
}