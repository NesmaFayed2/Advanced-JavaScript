class Person {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  sayMyName() {
    return this.fn + " " + this.ln;
  }
}

const classP1 = new Person("nesma", "fayed");
//console.log(classP1.sayMyName());

class superHero extends Person {
  constructor(fn, ln) {
    super(fn, ln);
    this.IsSuperHero = true;
  }

  isFightingCrime() {
    return "He Is Fighting Crime !!  Guess who ???? ";
  }
}

const batman = new superHero("Habibi", " Allah Yrhamo ");
console.log(batman.isFightingCrime());
console.log(batman.sayMyName());
