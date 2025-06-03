
type Employee = {
    readonly id: string;
    name: string;
    position: string;
    baseSalary: number;
    getSalary: () => number;
    getBonus: (percent: number) => number;
    getDetail: () => string;
};

const createEmployee = (
    id: string,
    name: string,
    position: string,
    baseSalary: number
): Employee => {
    return {
        id,
        name,
        position,
        baseSalary,
        getSalary: function () {
            return this.baseSalary;
        },
        getBonus: function (percent: number) {
            return this.baseSalary * (percent / 100);
        },
        getDetail: function () {
            return `${this.name} (${this.position}) - Salary: $${this.baseSalary}`;
        }
    };
};

const employees: Employee[] = [
    createEmployee("E001", "Sokha", "Developer", 1200),
    createEmployee("E002", "Dara", "Designer", 1000),
    createEmployee("E003", "Sreyneang", "Manager", 2000),
    createEmployee("E004", "Vannak", "QA Engineer", 1100),
    createEmployee("E005", "Bopha", "HR", 900)
  
];

const result = [];

for (let i = 0; i < employees.length; i++) {
    const e = employees[i];
    result.push({
        id: e.id,
        name: e.name,
        position: e.position,
        salary: e.getSalary(),
        bonus: e.getBonus(10),
        detail: e.getDetail()
    });
}

console.table(result);
