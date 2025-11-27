let frutas = ['Manzana', 'Banana', 'Cereza', 'Durazno'];

const personajes = [ "Rick", "Morty", "Summer", "Beth", "Jerry" ];

console.log(frutas);

frutas = ['Kiwi', 'Pera'];

console.log(frutas);


console.log(personajes); 

frutas.push('Uva'); //agrega al final
console.log(frutas);
frutas.unshift('Coco'); //agrega al inicio
console.log(frutas);

frutas.pop(); //
console.log(frutas);

frutas.shift(); //
console.log(frutas);


//map

personajes.map( personaje => {
    console.log(personaje + "🎅🏻");
})

//filter

const personajesFiltrados = personajes.filter( personaje => personaje.length > 4 );
console.log(personajesFiltrados); // [ 'Morty', 'Summer', 'Beth', 'Jerry' ]

//sort

const personajesOrdenados = personajes.sort();
console.log(personajesOrdenados); // [ 'Beth', 'Jerry', 'Morty', 'Rick', 'Summer' ]

const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5];

const numerosOrdenados = numeros.sort( (a, b) => a - b );
console.log(numerosOrdenados); // [ 1, 1, 2, 3, 4, 5, 5, 6, 9 ]


//find

