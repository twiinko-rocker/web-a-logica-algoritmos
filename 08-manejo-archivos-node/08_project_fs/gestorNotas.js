const fs = require("fs");

const archivo = './notas.json'; // Archivo donde se almacenan las notas

const agregarNota = (titulo, contenido) => {
    let notas = [];
    if (fs.existsSync(archivo)) { // Verifica si el archivo existe
        const datos = fs.readFileSync(archivo, 'utf-8');
        notas = JSON.parse(datos); // Lee las notas existentes
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota); // Agrega la nueva nota al array

    fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
    console.log(`✅ Nota agregada: "${titulo}"`);
}


//Leer notas

const leerNotas = () => {
    if (fs.existsSync(archivo)) {
        const datos = fs.readFileSync(archivo, 'utf-8');
        return JSON.parse(datos); // Lee y devuelve las notas existentes
    } else {
        console.log("No hay notas guardadads");
    }
}

//eliminar nota

const eliminarNota = (titulo) => {
    if (fs.existsSync(archivo)) {
        const datos = fs.readFileSync(archivo, 'utf-8'); // Lee las notas existentes
        let notas = JSON.parse(datos); // Lee las notas existentes  
        const notasFiltradas = notas.filter(nota => nota.titulo !== titulo); // Filtra la nota a eliminar
        fs.writeFileSync(archivo, JSON.stringify(notasFiltradas)); // Guarda las notas restantes
        console.log(`Nota con titulo "${titulo}" eliminada`);
    } else {
        console.log("No hay notas guardadads para eliminar");
    }
}


agregarNota('Compras', 'Comprar leche y pan');

agregarNota('Tareas', 'Terminar el proyecto de Node.js');

leerNotas();

eliminarNota('Compras');

leerNotas();