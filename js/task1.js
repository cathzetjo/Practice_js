
   
   let num1 = prompt("Enter 1 number", "2");
   let num2 = prompt("Enter 1 number", "8");

   function sum(a, b) {
       return a + b;
   }

   document.writeln("Sum of <u>strings</u> " +num1 + " and " + num2 + " : " + + sum(num1, num2));
   document.writeln("Sum of <u>numbers</u> " +num1 + " and " + num2 + " : " + + sum(parseInt(num1), parseInt(num2)));
