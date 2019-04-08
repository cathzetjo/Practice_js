/*
 Sorting
 - increasing year of publication;
 - deincreasing year of publication;
 - increasing the number of pages;
 - name of the author.
*/

const library = [
  {
    year: 1995,
    pages: 286,
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    year: 2015,
    pages: 656,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    libraryID: 4264
  },
  {
    year: 2008,
    pages: 464,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin", libraryID: 3245
  },
  {
    year: 2015,
    pages: 706,
    title: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    author: "Gayle Laakmann McDowell",
    libraryID: 2748
  },
  {
    year: 1997,
    pages: 672,
    title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms, 3rd Edition",
    author: "Donald E. Knuth",
    libraryID: 2748
  }];

function sortingAuthor (a, b) {
  if ( a.author < b.author ) return 0;
  else return 1;
}

let result = library.sort((a,b)=>a.year-b.year);
console.log( "\x1b[31m");
console.info('Sorting by increasing year of publication'.toUpperCase(), "\x1b[33m");
console.log(result);

console.log( "\x1b[31m");
console.info('Sorting by deincreasing year of publication'.toUpperCase(), "\x1b[34m");
result = library.sort((a,b)=>b.year-a.year);
console.log(result);

console.log( "\x1b[31m");
console.info('Sorting by increasing the number of pages'.toUpperCase(), "\x1b[36m");
result = library.sort((a,b)=>a.pages-b.pages);
console.log(result);

console.log( "\x1b[31m");
console.info('Sorting by name of the author'.toUpperCase(), "\x1b[32m");
result = library.sort(sortingAuthor);
console.log(result);

console.log( "\x1b[0m"); //colors reset
