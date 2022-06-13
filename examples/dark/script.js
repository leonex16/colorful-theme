// functions
var x1 = 0; // A global variable, because it is not in any function
let x2 = 0; // Also global, this time because it is not in any block

function f() {
  var z = 'foxes', r = 'birds'; // 2 local variables
  m = 'fish'; // global, because it wasn't declared anywhere before

  function child() {
    var r = 'monkeys'; // This variable is local and does not affect the "birds" r of the parent function.
    z = 'penguins'; // Closure: Child function is able to access the variables of the parent function.
  }

  twenty = 20; // This variable is declared on the next line, but usable anywhere in the function, even before, as here
  var twenty;

  child();
  return x1 + x2; // We can use x1 and x2 here, because they are global
}

f();

console.log(z); // This line will raise a ReferenceError exception, because the value of z is no longer available