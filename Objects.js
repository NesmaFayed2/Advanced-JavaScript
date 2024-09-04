// //objects :

// //first method
// var obj1 = {
//   fname: "nesma",
//   lname: "fayed",
// };

// //i can access it using dot notation or bracket notaion

// console.log(`${obj1.fname} ${obj1.lname}`);
// //or
// console.log(`${obj1["fname"]} ${obj1["lname"]}`);

// //seconed method using a function

// function createobject(fname, lname) {
//   let newobj = {};
//   newobj.fname = fname;
//   newobj.lname = lname;
//   return newobj;
// }

// let obj2 = createobject("basma", "essam");
// console.log(obj2.fname + " " + obj2.lname);

// //third method to use constructor function
// function Creteobject2Construtor(fname, lname) {
//   //let this = {}
//   this.fname = fname;
//   this.lname = lname;
//   //return lname;
// }

// let obj3 = new Creteobject2Construtor("khaled", "elkholy");
// console.log(obj3.fname + " " + obj3.lname);
// //NOTE: if remove new keyword it will return undifiend and assign the values to the global objet this
// let obj4 = Creteobject2Construtor("ana", "anna");
// console.log(obj4);
// console.log(fname);

//________________________________________________________________________

//              4 ways ypou can execute a function in JS

// function foo() {
//   console.log("help");
// }

// foo(); //#1

// let object = {};
// object.foo = function () {
//   console.log("help");
// };

// object.foo(); //#2

// new foo(); //#3

// foo.call() #4
//____________________________________________________________

// lets take the #2 method : which is call the function which is a property of an object

// let object2 = { prob: "this is an object this refers to " };
// object2.foo = function () {
//   console.log("help");
//   console.log(this); // this will refer to the object
// };

// object2.foo(); //#2

//____________________________________________
// lets take the #3 method : which is call the function with new

function fun() {
    //let this = {}
  console.log("fun");
  console.log(this);
  //return this{}
}

new fun();


