let deuda = [500, 'no']
console.log(deuda.indexOf('si'));

if (deuda.indexOf('si') === -1) {
    console.log('Este no pago');
} else {
    console.log ('ATR no tenes deuda');
}

let color = "rojo";
let otroColor = color;
console.log (color, otroColor);
otroColor = 'Azul';

console.log (color,otroColor);
let arrayNum = [1, 2, 3, 4, 5];
let miOtroArrayNum = arrayNum;
let miOtroArrayNoPuntero = [...arrayNum];

miOtroArrayPuntero.push(6);
miOtroArrayPuntero.push(7);

console.log(arrayNum, miOtroArrayNoPuntero);