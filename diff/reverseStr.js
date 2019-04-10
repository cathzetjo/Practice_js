let a = "Hello World";

console.log(typeof a, a);
let b = a.split(" ");

console.log(typeof b, b);
console.log(Array.isArray(b));

for (let i=0; i<b.length; i++) {

  b[i]=(b[i].split("").reverse()).join("");

}
console.log(typeof b, b);
console.log(Array.isArray(b));

let c = b.join(" ");

console.log(typeof c, c);