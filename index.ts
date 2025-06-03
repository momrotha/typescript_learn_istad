// built-in types

let str:string = 'hello world';
let num:number = 123;
let data = [1, "dada"];
let x;
console.log(`The reult type string is ${typeof str}`);
console.log(`The reult type number is ${typeof num}`);
console.log(`The reult type data is ${typeof data}`);
console.log(`The reult type x is ${typeof x}`);

// unkown
let un:unknown;
function catchType(un:unknown){
    if (typeof (un) == 'string'){
        console.log("This is a string");
    } else if (typeof (un) == 'number'){
        console.log("This is a number");
    } else {
        console.log('unkown type');
    }
} 
catchType('hello');
catchType(123);

// any
// async function catchTypeAny(url: string): Promise<any> {
//     try {
//         const data = await fetch(url);
//         const response = await data.json();
//         return response;
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// const base_url = "https://dummyjson.com/carts";
// let result = catchTypeAny(base_url).then(data=>console.log(data));
// console.log(result);

function random(str:any)
{
    console.log(str);
}

let nums:number[] = [1,34,556];
random(nums);

// never
// function ErrorResponse():never{
//     throw new Error(`This is an error: `);

// }
// ErrorResponse();

// array
let arrayValue = [1, "Rotha"];
console.table(arrayValue);

let arrayNumber:number[] = [1, 2, 3, 4];
console.table(arrayNumber);
console.log(arrayNumber);

// copy array using spread operator...
let arrayCopy1 = [...arrayNumber];
console.log(`the copy array is use spread ${arrayCopy1}`);

// copy array using slice method
let arrayCopy2 = arrayCopy1.slice();
console.log(`the copy array is use slice ${arrayCopy2}`);
// copy array using .from
let arrayCopy3 = Array.from(arrayCopy2);
console.log(`the copy array is use .from ${arrayCopy3}`);

// copy array using concat method
let arrayCopy4 = arrayCopy3.concat();
console.log(`the copy array is use concat ${arrayCopy4}`);
// copy array using map method
let arrayCopy5 = arrayCopy4.map((item) => item);
console.log(`the copy array is use map ${arrayCopy5}`);
// copy array using for loop
let arrayCopy6 = [];
for (let i = 0; i < arrayCopy5.length; i++) {
    arrayCopy6.push(arrayCopy5[i]);
}
console.log(`the copy array is use loop ${arrayCopy6}`);

// copy using filter method
let arrayCopy7 = arrayCopy6.filter(num => num % 2 == 0);
console.log(`the copy array is use filter ${arrayCopy7}`);
console.log("========================");
// tuple
let tupleValue:[number,string,boolean] = [1,"Rotha",true];
console.log(`The tuple value is ${tupleValue}`);
// assign value to tuple
tupleValue= [2,"Rotha",false];
console.log(`The tuple value is ${tupleValue}`);
let res = tupleValue[0].toFixed(20);
console.log(`The tuple value is ${res}`);
let res1 = tupleValue[1].toUpperCase();
console.log(`The tuple value is ${res1}`);
let res2 = tupleValue[2].toString();
console.log(`The tuple value is ${res2}`);
