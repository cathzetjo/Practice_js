/*
1. Comparison
Write a function that will compare 2 objects to match all the keys (properties).
This function take 2 objects and return true if these objects have all the keys the same.*/


const obj = {brand: 'bmw', model: 'm5', year: 2014, color: 'black'};
const objSame = {brand: 'kia', model: 'rio', year: 2010, color: 'silver'};
const objDiff = {brand: 'bmw', model: 'mini', year: 2011};

function compare(objFirst, objSecond) {

  let flag = false;

  for (let prop in objFirst) {

    for (let elem in objSecond) {

      if (prop === elem) {
        flag = true;
      } else (flag = false);
    }
  }
  return flag;
}

console.log(compare(obj, objSame));
console.log(compare(obj, objDiff));