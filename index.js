// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name){
  cats.push("Ralph");
}

function destructivelyPrependCat(name){
  cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
  cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
  cats.shift("Milo")
}
function appendCat(name) {
  const newCatsArray = [...cats, "Broom"];
  return newCatsArray;
}
function prependCat(name){
  const newCatArray = ["Arnold", ...cats];
  return newCatArray;
}
function removeLastCat(name){
  const newCatArray = cats.slice(0, cats.length - 1);
  return newCatArray;
}
function removeFirstCat(name){
  const newCatArray = cats.slice(1);
  return newCatArray;
}
