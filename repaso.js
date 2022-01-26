const zoom =(a,b) => {
    return a + b;

};
console.log (zoom(5));

const zoom2 =(a,b) => {
    let existeA = a == undefined ? 0 : a
    let existeB = b == undefined ? 0 : b
    return existeA + existeB;
};

console.log(zoom2());

const zoom2 =(a,b) => {
    console.log(typeof b);
    if (b == undefined);{

    }
}

const zoom3 =(a = 0,b = 0) => {
    return a + b;
};
console.log(zoom3());

const duplicarArray = (arr = [])=> {
if (arr.lenght !== undefined){
    return arr.map((v) => v * 2);
}
return 'Error esperaba un array';
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let todoJunto = [...arr1, ...arr2];
console.log(todoJunto);

let array1 = duplicarArray([2, 4, 6, 8]);
console.log(array1);

let array2 = duplicarArray([2, 4, 6, 8]);
console.log(array2);

let array3 = duplicarArray([]);
console.log(array3);

let copyArr1 = [...arr1];
copyArr1.push(1000);
console.log(arr1); 

imprimirSaludos ('hola', 'hello', 'Privet', 'Hi');
const imprimirSaludos2 = (...args) => {
    for (const saludo of args){
       console.log (saludo);
    }
};

imprimirSaludos2('Hola', 'Hello');

const mayus = (str) => {
    let arr = [...str]
    let mayus = arr.map((letra) => letra.toUpperCase()).join("")
    return mayus;
};

//SPREAD CON OBJ//

const auto = {
    ruedas: 4,
    carroceria: metal,
    motor: true,

};

const sedan = {
    ...auto,
    puertas: 4,
    tipo: 'familiar'
};

const