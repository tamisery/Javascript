function funcname () {

}
function tresConsolas() {
    console.log ('Hola')
    console.log ('Hola')
    console.log ('Hola')
    console.log ('Hola')
    

}

tresConsolas();
tresConsolas();

//ejemplo dado//

function dadoRandom() {
    let numero = Math.floor(Math.random () * 6) + 1;
    console.log(numero); 
}

function lanzarDado (cantidad) {
    for (let index = 0; index < cantidad; index++){
        dadoRandom();
    }
}
lanzarDado(50);

function SayMyName(nombre){
    if (typeof nombre === 'string'){
        console.log (`Tu nombre es : ${nombre}`);
    }
    else {
        console.log ('Esperaba un string');
    }
}

SayMyName();

function cuadrado(num) {
    console.log(num + num)
}

function sumar (a, b){
    console.log(a + b)

}
function dividir (a, b){
    console.log(a + b)
}

cuadrado(5)
sumar (50, 100)
dividir(20, 5)
//

function cuadradoR(num) {
    return num + num;
}

function sumarR (a, b){
    return a + b;

}
function dividirR (a, b){
    return a / b;
}

let cuadradode5 = cuadradoR (5)
let sumaDeNum = sumarR (50, 100)
let dividirVar = dividirR (20, 5)

console.log (cuadradode5);
console.log (sumaDeNum);
console.log (dividirVar);

function retornaMuchos () {

}

function cuadrados(...args){
    let MiArray = [];
    for (let index = 0; index < args.length; index++) {
       MiArray.push(args[index])  * args[index];
        
    }
    return MiArray;
}
let ArrayDeCuadrados = cuadrados(1, 2, 4, 5, 6, 7, 8, 9, 10)
console.log(ArrayDeCuadrados)
let [valor1, valor2, valor3] = cuadrados [5, 4, 3];



function esRojo2(color) {
    if (color.toLowerCase() == 'rojo') {
        return true;
    }
    return false;
}

function esRojo(color) {
    return color.toLowerCase() == 'rojo';
}

function esRojo3(color) {
    return color.toLowerCase() = 'rojo';
}

console.log(esRojo2('ROJO'));
