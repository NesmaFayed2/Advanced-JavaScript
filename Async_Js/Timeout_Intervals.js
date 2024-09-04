// //              setTimeOut()

// //setTimeout(function ,duration , parm1,param2,...)

// // function greet(name) {
// //   console.log(name);
// // }
// // setTimeout(greet, 2000, "nesma");

// // //_____

// function greet2() {
//   console.log("hello");
// }
// const timedout = setTimeout(greet2, 0);
// clearTimeout(timedout);

// //_____

// //                   setInterval()

// //setInterval(function ,duration, parm1, parm2);
// // function greet3(name) {
// //   console.log(` hello ${name}`);
// // }

// // const interval = setInterval(greet3,2000, "nesma");
// // clearInterval(interval);

// //                  recursive setTimeout

// //it is irrespective og how long the code takes to run ,the intervals will remain the same
// //but in setintervals => the duration interval will include the time taken to execute the code you want to run
// // it also will make you can calculate the different dalay before running every iteration
// setTimeout(function run() {
//   console.log("Hello");
//   setTimeout(run, 100);
// }, 100);
