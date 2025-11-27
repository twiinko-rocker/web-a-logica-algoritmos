import { saludar, ladrar } from './funciones.js';



const ID_INTERNO = Symbol('idinterno') // Crear un símbolo único

const usuario = {
    nombre: 'Juan',
    edad: 30,
    [ID_INTERNO]: 12345
}



// for (let key in usuario) {
//     console.log(key);
// }

//Desestructuración

// const { nombre, edad } = usuario

// console.log(nombre);
// console.log(edad);


// console.log(saludar("Alan"));

//Ejemplo de Promise

function obtenerDatos() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Simular éxito o fracaso
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 5000)
    })
};

obtenerDatos()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });