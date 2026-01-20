const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const encontrarPareja = (arr) => {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        } else {
            inicio++;
            siguiente++;
        }
    }
    return null; //No se encontraron parejas

}

console.log(encontrarPareja(invitados));

