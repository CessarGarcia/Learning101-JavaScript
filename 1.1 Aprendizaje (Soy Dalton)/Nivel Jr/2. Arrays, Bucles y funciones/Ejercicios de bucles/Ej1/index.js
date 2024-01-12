let array = [28, 78, 32, 14, 20]
let sum = 0
let len = array.length;
let result = 0

let i = 0
while (i < len) {
    sum = sum + array[i++];
}

result = sum / len
alert("El promedio de ("+array+") es :  "+result);
