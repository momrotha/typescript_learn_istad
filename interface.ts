
interface Person {
    name: string;
    age: number;
}

// Extended interface
interface PersonWithHobbies extends Person {
    hobbies: string[];
    profession?: string; // Optional property
    greet(): string;     // Method declaration
}

// Example of another interface
interface ContactInfo {
    email: string;
    phone: string;
}

// Extending multiple interfaces
interface FullPerson extends PersonWithHobbies, ContactInfo {
    address: string;
}

// Implementation example
const Person1: FullPerson = {
    name: "Mey",
    age: 25,
    hobbies: ["coding", "reading"],
    email: "mey@example.com",
    phone: "123-456-7890",
    address: "Phnom Penh, Cambodia",
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
};

const Person2: FullPerson = {
    name: "Ben",
    age: 21,
    hobbies: ["gamming", "music"],
    email: "ben@example.com",
    phone: "123-456-4356",
    address: "Kondal, Cambodia",
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
};

const Person3: FullPerson = {
    name: "Boo ",
    age: 23,
    hobbies: ["traveling", "photography"],
    email: "boo@example.com",
    phone: "123-290-7890",
    address: "Kompong chhnang, Cambodia",
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
};

console.log([Person1, Person2, Person3].map(p => p.greet()).join("\n"));
