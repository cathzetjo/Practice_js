/*
Removal.
Write a function to delete the specified properties on the object.
 The function should take the first parameter of the object,
 and the following parameters - the enumeration of properties that must be removed.
 The cleaned object must be returned at the end of the function.*/

function deleteKeys (obj, ...key) {

for (let i=0; i< arguments.length; i++) {
  for (let element in obj) {

    if (element == arguments[i]) {

      delete obj[element];
    }
  }
}
  return obj;
}

let obj = { a: 2, mambo: 43, zelda: 10, lock: "333"}
obj = deleteKeys (obj, "mambo")
console.log(obj);

obj = { a: 2, mambo: 43, zelda: 10, lock: "333"}
obj = deleteKeys (obj, "mambo", "lock");
console.log(obj);

obj = { a: 2, mambo: 43, zelda: 10, lock: "333"}
obj = deleteKeys (obj, "mambo", "lock", 'loop', 'rest', 'a', 'b');
console.log(obj);