function* generatorFunction() {
  yield "hello";
  yield "world";
}

//if i call it it will return iterable object
const generatorObject = generatorFunction();

for (word of generatorObject) {
  console.log(word);
}
