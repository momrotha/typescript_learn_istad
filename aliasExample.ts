// declare type aliase 
// use for can't duplicate, syntax has need keyword type name is paskalcase = and has{}
type Student = {
    readonly id: string,
    name: string,
    gender: string,
    getDetails: () => void;
    getRetired : (data:Date) => void;
};
let student: Student = {
    id: "S001",
    name: "Sokha",
    gender: "male",
    getDetails() {
        console.log(`${this.id}, ${this.name}, ${this.gender}`)
    },
    getRetired(data: Date) {
        console.log(`Student ${this.name} will retire on ${data.toDateString()}`);
    }

}
console.table([student]);