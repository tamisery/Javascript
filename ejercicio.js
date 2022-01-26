//contarLetras = 'abbbcccdddee'

const contarLetras ='abbbcccdddee';
let letras = contarLetras.split ('');
let contarLetras = letras.reduce()

const contarLetras = (string) => {
    return [...string].reduce((acc, value) => {
        return {
            ...acc,
            [value]: acc[value] ? ++acc[value] : 1,
        };
    }, {});
};
const contarLetrasv2 = (string) => {
    let stringToArray = [...string];
    let objLetras = stringToArray.reduce(acc, value)
}

const doMath = {
    multiplicar: function(){
        return a * b
    },
    sumar: function(){
        return a + b

    },
    restar: function(){
        return a - b
    },
    dividir: function(){
        return a / b;

    },
};

console.log(doMath.multiplicar(5, 5));
console.log('\n');

const doMath2 = {
    multiplicar(...args){
        return console.log(args);
    },
    sumar(a, b){
        return a + b

    },
    restar(a, b){
        return a - b
    },
    dividir(a, b){
        return a / b;

    },
};
doMath2.multiplicar(5, 5, 10, 5, 11, 32, 150, 948);



//THIS//

function hola() {
    console.log (this);
}