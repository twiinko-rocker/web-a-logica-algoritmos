// // Ejemplo 1

// let cuentaAtras = (num) => {

//     //Caso base
//     if (num === 0) {
//         return
//     }
//     console.log(num)
//     //Llamada recursiva
//     return cuentaAtras(num - 1)
// }
// console.log(cuentaAtras(5))


// // Ejemplo 2 - factorial recursivo


// const factorial = (num) => {
//     debugger
//     if (n === 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))

// Ejemplo 3 -determinar par o impar

// const parImpar = (num) => {

//     //caso base
//     if (num === 0) return "Es par";
//     if (num === 1) return "Es impar";

//     //llamada recursiva
//     return parImpar(num - 2)

// }


// console.log(parImpar(7)) 


// const invertirString = (str) => {

//     //caso base
//     if (str.length <= 1) return str;

//     //llamada recursiva
//     return str[str.length - 1] + invertirString(str.slice(0, -1));

// }

// console.log(invertirString("hola"))

//Ejemplo 5 determinado caracter en un string

let programa = (string, letter, index = 0, count = 0) => {

    //caso base

    if (index === string.length) return count;
    if (string[index] === letter) count++;

    //llamada recursiva

    return programa(string, letter, index + 1, count);

}
