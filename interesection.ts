// is all in one like inheritance 
// use & impersen
type Animal = {
    type: string,
    leg: number
};

type Sound = {
    sound: string,
    volume: number
};

type Cat = {
    cat: Sound[];
};
type Cow = {
    cow: Sound[];
};

type Pig = {
    pig: Sound[];
};

type Animals = Animal & Cat & Cow & Pig;

const Action: Animals = {
    type: "Mammal",
    leg: 4,
    cat: [
        {
            sound: "Meow Meow",
            volume: 100
        }
    ],
    cow: [
        {
            sound: "More More",
            volume: 90
        }
    ],
    pig: [
        {
            sound: "Oug Oug",
            volume: 90
        }
    ]
    
};

console.table(Action);
