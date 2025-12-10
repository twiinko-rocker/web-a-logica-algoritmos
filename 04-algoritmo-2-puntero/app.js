// const numeros = [5, 3, 8, 1, 2, 7, 2, 5, 8];

// const grupoNumeros = new Set(numeros);

// const cliente1 = { nombre: "Juan", id: 101 };
// const cliente2 = { nombre: "Ana", id: 102 };
// const cliente3 = { nombre: "Luis", id: 103 };

// const reservas = new Map();



// //arboles

// let arbol = {
//     nombre: "root",

//     hijos: [
//         {
//             nombre: "Carpeta 1",
//             hijos: [
//                 {
//                     nombre: "Archivo 1-1"
//                 },
//                 {
//                     nombre: "Archivo 1-2"
//                 },
//             ]
//         },
//         {
//             nombre: "Carpeta 2",
//         }
//     ],
// }

// console.log(arbol.hijos.forEach(e => console.log(e.nombre)));



// //algpritmo puntero

// let puntero = 0;

// // //pares de nums que sumen una cantidad objetivo

// let arr = [2, 7, 11, 15, 18];

// let obj = 9;

// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //         if (arr[i] + arr[j] === obj) {
// //             console.log(`Par encontrado   : ${arr[i]} + ${arr[j]} es igual a ${obj} `);
// //         }
// //     }
// // }


// function sumaobjetivo(arr, objetivo) {
//     let left = 0;
//     let right = arr.length - 1; // ultimo indice

//     while (left < right) {
//         const suma = arr[left] + arr[right];

//         if (suma === objetivo) {
//             return [arr[left], arr[right]];
//         } else if (suma < objetivo) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return null;
// }

// console.log(sumaobjetivo(arr, obj));


//Eliminar duplicados de un array

let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6]; // array ordenado

function eliminarDuplicados(arr) { //

    let slow = 0; //

    for (let fast = 1; fast < arr.length; fast++) { // puntero rapido
        if (arr[fast] !== arr[slow]) { // si los valores son diferentes 
            slow++; // incrementa el puntero lento
            arr[slow] = arr[fast]; // asigna el valor unico en la posicion del puntero lento
        }
    }

    return arr.slice(0, slow + 1); // devuelve el array sin duplicados
}

console.log(eliminarDuplicados(arr));




