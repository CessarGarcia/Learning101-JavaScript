// let counter;
// console.log(counter); // -> undefined
// {
//     counter = 1;
//     console.log(counter); // -> 1
// }
// counter = counter + 1;
// console.log(counter); // -> 2


var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight);

let counter = 100;
console.log(counter); // -> 100
{
  let counter = 200;
  console.log(counter); // -> 200
}
console.log(counter); 