// create function 
function displayMessage(message: string): void {
    console.log(message);
}
// calling the function displayMessage
displayMessage("Hello, displayMessage function!");

// create a function calculate tax
function taxCalculation(income: number, tax: number): number {
    return income * (tax / 100);
}
// calling the function taxCalculation
const results = taxCalculation(1000, 10);
console.log(`Tax calculated: $${results}`);

// function as constructor
function setConstructor(fn:(s:string)=>void){
    fn("This is a constructor function example.");
}
console.log(setConstructor);

// object 
const Students: {
    readonly id: string,
    name: string,
    gender: string,
    getDetails: () => void
} = {
    id: "E001",
    name: "Sokha",
    gender: "Female",
    getDetails() {
        console.log(`Student ID: ${this.id}, Student Name: ${this.name}, Student Gender: ${this.gender}`);
    }
};

console.table(Students);
// Calling the getDetails method
Students.getDetails();
