const { log } = require('console');
const fs = require('fs');

// // Función para leer un archivo de texto
// // Ruta del archivo
// // set de caracteres UTF-8
// //Funcion se va a ejecutar despues del tiempo que tome la funcion en resolverse

// fs.readFile("index.html", "utf-8", (err, contenido) => {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log(contenido);
//     }
// });




// //Renombrar un archivo

// fs.rename("index.html", "main.html", (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log("Nombre Modificado");

// })

// //Agregar conenido al final de un archivo
// //1. ruta del archivo
// //2. Nuevo contenido
// // //3. Funcion se va a ejecutar despues del tiempo que tome la funcion en resolverse

// // fs.appendFile("main.html", "<h1>Hola Node       </h1>", (err) => {  
// //     if (err) {
// //         throw err;
// //     }
// // console.log();


// //modificar todo el contenido de un archivo
// //1. ruta del archivo
// //2. Nuevo contenido
// //3. Funcion se va a ejecutar despues del tiempo que tome la funcion en resolverse

// fs.writeFile("main.html", "<h1>Hola Node       </h1>", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Informacion reemplazada");
// })

// //Eliminar un archivo
// //1. ruta del archivo
// //2. Funcion se va a ejecutar despues del tiempo que tome la funcion en resolverse

// fs.unlink("main.html", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Archivo eliminado");
// })

//Prueba asincrona

// console.log("1. Antes de leer el archivo");

// fs.readFile("index.html", "utf-8", (err, contenido) => {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log(contenido);
//     }
// });

// console.log("2. Despues de leer el archivo");

// fs.rename("index.html", "main.html", (err) => {
//     if (err) {
//         throw err;
//     }       
//     console.log("Nombre Modificado");
// })

// console.log("3.Despues de renombrar el archivo ");

// fs.appendFile("main.html", "<h1>Hola Node       </h1>", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Contenido agregado");
// })

// console.log("Despues de agregar contenido al archivo ");


//utilizando las versiones sincrona de los metodos de fs

// console.log("Antes de leer el archivo");

// const archivo = fs.readFileSync("main.html", "utf-8");

// console.log(archivo);

// console.log("Despues de leer el archivo");

// fs.renameSync("main.html", "index.html");

// console.log("Despues de renombrar");

// fs.appendFileSync("index.html", "<h1>Hola de nuevo</h1>");

// console.log("Despues de añadir informacion al archivo");



//Ejercicio con archivo de texto

const panagrama = fs.readFileSync("panagrama.txt", "utf-8");

console.log(panagrama);

fs.writeFileSync("panagrama-copia.txt", panagrama);

const nuevoPanagrama = panagrama.replace(/"feliz"/ig, "triste");

fs.writeFileSync("panagrama-copia.txt", nuevoPanagrama);
