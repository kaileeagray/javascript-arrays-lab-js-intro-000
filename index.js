var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
    kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name);
    return kittens;
}

function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens;
}

function destructivelyRemoveFirstKitten() {
    kittens.shift();
    return kittens;
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  var array = [name].concat(kittens);
  return array;
}

function removeLastKitten() {
  var array = [name].concat(kittens);
  return array;
}
