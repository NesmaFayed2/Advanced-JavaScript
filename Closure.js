function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}

//expected output is 1 1 because of the closure
// outer();
// outer();

function outer2() {
  let counter = 0;
  function inner2() {
    counter++;
    console.log(counter);
  }
  return inner2;
}

const first = outer2();

first();
first();
first();

console.log("______________________");
const seconed = outer2();

seconed();
seconed();
seconed();
            