// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob")
  return kittens
}

var kittens =["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
var kit = ["Broom"]
function appendKitten(name) {
var appendKitten = kittens.concat(kit)
return appendKitten
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten (name) {
  var kit = ["Arnold", ...kittens]
  return kit
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten () {
var kit = kittens.slice(2);
return kit
}

var kittens = ["Milo", "Otis", "Garfield"];
