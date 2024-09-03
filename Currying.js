function sum(a, b, c) {
  return a + b + c;
}

//console.log(sum(5, 2, 3));

//  sum(a,b,c) VS sum(a)(b)(c)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const currySum = curry(sum);

//console.log(currySum(2)(3)(1));

const add2 = currySum(2);
const add3 = add2(3);
const add6 = add3(6);
console.log(add6);
