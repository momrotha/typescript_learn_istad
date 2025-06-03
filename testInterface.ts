interface Person {
    name: string;
    genders: number;
    age: number;
}

interface Person1 extends Person {
    score: number;
    avg: number;
}

const score = 14;

const person1: Person1 = {
    name: "Alex",
    genders: 1,
    age: 21,
    score: score,
    avg: score / 3
};

console.log("Score:", person1.score);
console.log("Average:", person1.avg);
