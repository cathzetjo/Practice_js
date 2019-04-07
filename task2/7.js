/*
There is an array of some elements (can be set statically).
It is necessary to assign numbers from 1 to the elements of this array randomly.
You need to sort the array at random.
 As a result, you need to display in pairs on the console pairs of values “number - array element”.*/


const arr = ['King', 'Dill', 'Kangaroo', 'Fir', 'Skyscraper', 'Hussar'];
let indexArr=[];
let finalArr=[];

function randomSort () {
  let max = 30;
  let min = -30;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=1; i<arr.length+1; i++){
  indexArr.push(i);
}

let sortedArr = arr.sort(randomSort);

for (let i=0; i<arr.length; i++) {
  finalArr.push(indexArr[i]+ "-" +sortedArr[i]);
}

const finalString = finalArr.join('\n');
console.log(finalString);
