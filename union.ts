// union type 
// union is muy na kr ban is which one
function displayID(id:number | string | null ){

    if(typeof id === "string"){
        console.log(`The result is string`) 
    }else if(typeof id === "number"){
        console.log(`The result is number`) 
    }else if(typeof id === null){
        console.log(`The result is null`) 
    }
}
displayID(10)
// vertical bar (|)