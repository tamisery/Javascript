let miObjeto = new Object();
let miOtroObjeto = {};
let persona = {
    nombre: 'Tami',
    apellido: 'Salguero',
    edad: '23',
    cursando: true,
}

let chatt = {
    usuario: 'Cami',
    msj: 'Holuuuu',
    hora: 'hora: 20:20'

}
{
    
}
for (const obj of ARRAY_DE_ALUMNOS) {
    let textoRecursa =obj.recursa ? 'Recursa materias' : 'No recursa materias';
    console.log(`El alumno: ${obj.nombre} ${obj.apellido} ${textoRecursa} \n`);
}
