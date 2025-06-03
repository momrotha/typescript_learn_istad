// Input interface for function
interface Args {
    username: string;
    age: number;
}

// Return type for function
interface Return {
    username: string;
    age: number;
    doubleAge: number;
}

// Function that doubles the age
function ageDouble({ username, age }: Args): Return {
    return {
        username,
        age,
        doubleAge: age * 2
    };
}

// Flexible index interface
interface Index {
    username: string;
    age: number;
    [key: string]: string | number | boolean;
}

// Person interface with optional hobbies
interface Person {
    username: string;
    age: number;
    gender: "male" | "female";
    hobbies?: string[]; // optional
}

// Create a person object
const personOne: Person = {
    username: "John",
    age: 30,
    gender: "male",
    hobbies: ["coding", "music"]
};

// Call ageDouble function
const result = ageDouble({ username: personOne.username, age: personOne.age });

// Output values
console.log("Username:", personOne.username);
console.log("Age:", personOne.age);
console.log("Gender:", personOne.gender);
console.log("Hobbies:", personOne.hobbies?.join(", ")); // Safe optional chaining
console.log("Double Age:", result.doubleAge);
