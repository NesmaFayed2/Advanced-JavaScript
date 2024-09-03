function syMyName1(name) {
  console.log(`my name is ${this.name}`);
}
//______________________________
//implicit Binding
const PERSON = {
  name: "nesma",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
};

PERSON.sayMyName();

//______________________________________
//2-explicit binding
function sayMyName2() {
  console.log(`my name is ${this.name}`);
}

sayMyName2.call(PERSON);
//________________________________________
//3-new binding

function person(name) {
  this.name = name;
}

const p1 = new person("nesma");
const p2 = new person("fayed");

console.log(p1.name, p2.name);
//_________________________________________
//default binding
globalThis.name = "khaled";

sayMyName2();

//order:
//New Binding
//Explicit Binding
//implicit Binding
//Default Binding
