const array = [10, 16, 3, 5, 40, 17, 26]

const k = 3;

function sumaMaxima(arr, k) {

    let izq = 0;
    let der = izq + k - 1;
    let suma = 0;

    console.log(izq, der);

    for (let i = izq; i < der; i++) {
        suma += arr[i];
    }
    console.log(suma);
}



sumaMaxima(array, k);