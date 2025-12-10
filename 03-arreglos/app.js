//reduce

//

//includes


const frutas = ["manzana", "banana", "cereza", "durazno"];

const existeManzana = frutas.includes("manzana"); // true
const existePera = frutas.includes("pera");       // false

console.log(existeManzana);
console.log(existePera);



//some()

//Ejemplo 1: Verificar si al mens un numero es negativo

const numeros = [1, 2, 3, -4, 5];
const hayNegativo = numeros.some(num => num < 0);

if (hayNegativo) {
    console.log("Hay al menos un número negativo");
} else {
    console.log("No hay números negativos");
}


//Ejemplo 2: 

const palabras = ["sol", "luna", "estrella", "cielo"];
const largoPalabra = palabras.some(palabra => palabra.length > 8);

if (largoPalabra) {
    console.log("Hay al menos una palabra con más de 8 letras");
} else {
    console.log("No hay palabras con más de 8 letras");
}





//Ejemplo objetos: imprimir las materias de un estudiante

let estudiante = {
    nombre: "Ana",
    calificaciones: [],
    materias: ["Matemáticas", "Historia", "Ciencias", "Arte"],

    agregarMateria(mat) {
        this.materias.push(mat);
    },

    imprimirMaterias() {
        let mensaje = "Tus materias son: " + this.materias.join(", "); 
        console.log(mensaje);
        //        console.log(mensaje);
    },

    promedioNotas() {
        let suma = this.calificaciones.reduce((a, b) => a + b, 0);
        return suma / this.calificaciones.length;
    },

    cuantasMaterias() {
        return this.materias.length;
    },

    eliminarMateria(mat) {
        this.materias = this.materias.filter(m => m !== mat); 
    }

}

// imprimir tus materias son: Matemáticas, Historia, Ciencias, Arte


estudiante.imprimirMaterias();
