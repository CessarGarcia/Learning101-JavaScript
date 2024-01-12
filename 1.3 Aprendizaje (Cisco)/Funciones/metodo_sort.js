let num = [50,10,40,30,20];

// function compareNums(a,b){
//     let retVal = 0;

//     if (a<b){
//         retVal = -1;
//     }else{
//         retVal = 1;
//     }
//     return retVal;
// }

let descendente = num.sort((b,a) => a-b);
console.log(descendente);