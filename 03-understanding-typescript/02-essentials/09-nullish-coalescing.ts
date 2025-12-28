// nullish coalescing operator
let userName: string | null = null;
let userName2: string | undefined = undefined;
let userName3: string | null = '';

// if userName is null or undefined, then 'Guest' is returned
console.log(userName ?? 'Guest'); // returns 'Guest' because userName is null
console.log(userName2 ?? 'Guest'); // returns 'Guest' because userName2 is undefined
console.log(userName3 ?? 'Guest'); // returns '' because userName3 is ''

// nullish coalescing operator with object
let user: { name: string | null } = { name: null };
// if user.name is null or undefined, then 'Guest' is returned
console.log(user.name ?? 'Guest');

// nullish coalescing operator with array
let users: string[] | null = null;

// if users is null or undefined, then 'No user' is returned
console.log(users?.[0] ?? 'No user');