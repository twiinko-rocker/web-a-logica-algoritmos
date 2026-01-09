// Divide and conquer
//1 - Sumar todos los elementos de un array


const sumaDivideAndConquer = (array) => {
    //caso base, cuando el arreglo tenga un elemento

    if (array.length === 1) return array[0];

    //dividir el array en dos mitades
    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid);

    //Conquistar - sumar las dos mitades
    const leftSum = sumaDivideAndConquer(leftArray); //llamada recursiva
    const rightSum = sumaDivideAndConquer(rightArray); //llamada recursiva


}


//2- binary search

const binarySearch = (array, target, inicio = 0, fin = array.length - 1) => {

    //caso base
    if (array.length === 0) return -1; //array vacio

    if (inicio > fin) return -1; //elemento no encontrado

    //dividir el array

    const mid = Math.floor((inicio + fin) / 2); //indice del elemento medio

    if (array[mid] === target) return mid; //elemento encontrado

    if (array[mid] > target) { //buscar en la mitad izquierda
        return binarySearch(array, target, inicio, mid - 1); //llamada recursiva
    } else { // buscar en la mitad derecha
        return binarySearch(array, target, mid + 1, fin); //llamada recursiva
    }

}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));



// 3 -cuantas veces aparece un numero en un array

const encontrarNumero = (arr, numero) => {

    //caso base - el arreglo esta vacio
    if (arr.length === 0) return 0;

    //caso base 2 - el array tiene un solo elemento, lo comapramos con el tarhet
    if (arr.lenght === 1) return arr[0] === numero ? 1 : 0;

    //dividir el array en dos mitades
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);

    //conquistar

    const leftCount = encontrarNumero(leftArray, numero); //llamada recursiva
    const rightCount = encontrarNumero(rightArray, numero); //llamada recursiva

    //combinar los resultados de las dos mitades

    return leftCount + rightCount;

}


// min and max en un array

const minMax = (array, startIndex, lastIndex) => {
    
}