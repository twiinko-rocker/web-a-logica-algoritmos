const listaDeCompras = [];

const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
    }   

agregarProducto('Leche');
agregarProducto('Pan');
agregarProducto('Huevos');

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto); // Encuentra el índice del producto
    if (index > -1) { // Si el producto existe en la lista
        listaDeCompras.splice(index, 1); // Elimina el producto de la lista
    }
}

eliminarProducto('Pan'); // Elimina 'Pan' de la lista

console.log('Lista de Compras:', listaDeCompras);


const mostrarLista = () => {
    console.log('Productos en la lista de compras:');
    listaDeCompras.forEach( producto => {
        console.log('- ' + producto);
    });
}

mostrarLista();

const eraseDuplicateProducts = () => {
    const uniqueProducts = [...new Set(listaDeCompras)]; // Crear un conjunto para eliminar duplicados  
    listaDeCompras.length = 0; // Limpiar la lista original
    listaDeCompras.push(...uniqueProducts); // Agregar productos únicos de nuevo
}

