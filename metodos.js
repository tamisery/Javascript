//CALBACK

function soyunafn (fn) {
    return fn('estoy dentro de una soyunafn');
}

function logearFn(text) {
    console.log(text)
}

soyunafn(logearFn);

function esPar (n){
    return n % 4 == 0;
}

const esPar = (n) => {
    return n % 2 == 0;
}

//FOREACH

let numeros = [1,2,3,4,5,6,7,8];
function imprimirNumeros (){
    console.log(n);
}


numeros.forEach(imprimirNumeros);

const ARRAY_DE_ALUMNOS = {
    nombre: 'Lorena',
    apellido: 'Lopez',
}

let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let dobles = numeros2.map((n) => {
    return n * 2;

});
console.log(' [numeros2]: ')

const esPar3 = (n) => {
    return n % 2 == 0;
}

const esPar4 = (n) => n % 2 == 0;

console.log('/n')

let numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach((value, idx) => {
    console.log(value, idx);

});

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

for (const num of numeros) {
    console.log(num)
}

numeros.forEach((value) => {
if (value % 2 === 0){
    console.log(value);
}
});

ARRAY_DE_ALUMNOS.forEach((obj) => {
    let textoRecursa = obj.textoRecursa
    ? `Recursa materias - Llamar ${obj.tel.casa}`
    :'No recursa materias';
});