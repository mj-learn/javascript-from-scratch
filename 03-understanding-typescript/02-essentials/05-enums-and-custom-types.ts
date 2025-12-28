// classic enum
enum Role {
    Admin,
    Editor,
    User,
} // this is enum with string values

let userRole: Role = 0; // this is valid because enum values are numbers

// ...

userRole = Role.Editor; // this is valid assignment of enum value
// userRole = 'Admin'; // this is not valid because enum values are numbers

// popular alternative to enums is using string literal type
let userRole2: 'admin' | 'editor' | 'user';
userRole2 = 'admin';
// userRole2 = 'guest'; // this is not valid because userRole2 is string literal type

// popular alternative to enums is using alias type (RECOMMENDED)
// type keyword is used to create a new  custom type
type UserRole = 'admin' | 'editor' | 'user'; // this is a custom type

let userRole3: UserRole = 'admin';
// userRole3 = 'guest'; // this is not valid because userRole3 is a UserRole type

// ------------------------------------------------------------

// "enum-like" pattern: runtime object + a type derived from it (0 runtime enum code)
const USER_ROLE = {
    Admin: 'admin',
    Editor: 'editor',
    User: 'user',
} as const;

// 1) typeof USER_ROLE -> gets the TYPE of the value USER_ROLE (a type-level "mirror" of the object)
type UserRoleMap = typeof USER_ROLE;
// UserRoleMap is:
// {
//   readonly Admin: 'admin';
//   readonly Editor: 'editor';
//   readonly User: 'user';
// }

// 2) keyof UserRoleMap -> return all object keys as a union type
type UserRoleKey = keyof UserRoleMap;
// UserRoleKey is: 'Admin' | 'Editor' | 'User'

// 3) UserRoleMap[UserRoleKey] -> all values for those keys as a union type
type UserRoleFromConst = UserRoleMap[UserRoleKey];
// UserRoleFromConst is: 'admin' | 'editor' | 'user'

// Equivalent to 2 and 3 but as a "one-liner":
type UserRoleFromConstOneLiner = typeof USER_ROLE[keyof typeof USER_ROLE];

// Usage example:
let userRole4: UserRoleFromConst = USER_ROLE.Admin; // OK
// userRole4 = 'guest'; // error because guest is not a valid value for UserRoleFromConst
