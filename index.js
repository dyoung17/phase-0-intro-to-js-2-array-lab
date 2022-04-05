let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyOfCats = [...cats,name];
    return copyOfCats;
}

function prependCat(name){
    let copyOfCats = [name,...cats];
    return copyOfCats;
}

function removeLastCat(){
    let copyOfCats = cats.slice(0, 2)
    return copyOfCats;
}

function removeFirstCat(){
    let copyOfCats = cats.slice(1)
    return copyOfCats;
}