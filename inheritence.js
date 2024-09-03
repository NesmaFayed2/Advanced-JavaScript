function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Person.prototype.getFullName = function () {
  return this.fName + " " + this.lName;
};

function superHero(fName, lName) {
  Person.call(this, fName, lName);
  this.IsSuperHero = true;
}

superHero.prototype = Object.create(Person.prototype);
superHero.prototype.constructor = superHero;

superHero.prototype.fightCrime = function () {
  console.log("fighting crime !");
};

const batman = new superHero("Nesma", "fayed");

batman.fightCrime();

console.log(batman.getFullName());
