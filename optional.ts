// optional chaining
type Department = {
    name: string,
    createAt: Date
}
function getDepartmentInfo(id: number): Department | undefined | null {
    return id === 0 ? null : { name: 'IT', createAt: new Date() }
}

let department = getDepartmentInfo(10);
console.log(department);
if (department != null && department != undefined) {
    console.log(department.name);
    console.log(department.createAt);
}
getDepartmentInfo(10) ? null : { name: 'IT', createAt: new Date() }
let rsDepartment = getDepartmentInfo(20)?.name;
console.log(rsDepartment);