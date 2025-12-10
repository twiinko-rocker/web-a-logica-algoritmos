//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


// Usa filter() para obtener los productos que cuesten menos de $100.

const productosMenosDe100 = productos.filter(producto => producto.precio < 100);


// Usa sort() para ordenar esos productos alfabéticamente por su nombre.

const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));



// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

const nombresProductos = productos.map(producto => producto.nombre);


// Muestra los resultados de la aplicación de cada métiodo en consola.
console.log("Productos que cuestan menos de $100:", productosMenosDe100);
console.log("Productos ordenados alfabéticamente por nombre:", productosOrdenados);
console.log("Nombres de los productos:", nombresProductos);

// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.

//reduce para calcular el precio total de todos los productos

const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0)