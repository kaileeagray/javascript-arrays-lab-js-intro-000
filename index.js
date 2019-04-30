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
    kittens = kittens.shift();
    return kittens;
}
