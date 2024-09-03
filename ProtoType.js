function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

const P1 = new Person("nesma", "fayed");

const P2 = new Person("khaled", "elkohly");

Person.prototype.getFullName = function () {
  return this.fName + " " + this.lName;
};

console.log(P1.getFullName());
console.log(P2.getFullName());
