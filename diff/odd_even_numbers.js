//-----------EVEN------------

let array = [1, 2, 3, 2, 3333, 2, 7, 8, 9, 10, 11];
console.log(array);
let even = 0;

for (let element of array) {
  if (!(element & 1)) {
    even++;                      //count numebr of even numbers in array
  }
}
let odd = array.length - even;


console.log("even: ", even, "odd", odd);

for (let i = 0; i < even; i++) {
  let position = array.indexOf(array.find(item => !(item & 1)));  //find position of the first even number in array
  array.splice(position, 1);              //delete first even number in array
}
console.log("\t", array, "\n");

//-----------ODD------------

array = [1, 2, 3, 2, 3333, 2, 7, 8, 9, 10, 11];
console.log(array);
odd = 0;

for (let element of array) {
  if (element & 1) {
    odd++;                      //count numebr of odd numbers in array
  }
}
even = array.length - odd;


console.log("even: ", even, "odd", odd);

for (let i = 0; i < odd; i++) {
  let position = array.indexOf(array.find(item => (item & 1)));    //find position of the first odd number in array
  array.splice(position, 1);      //delete first even number in array
}

console.log("\t", array, "\n");