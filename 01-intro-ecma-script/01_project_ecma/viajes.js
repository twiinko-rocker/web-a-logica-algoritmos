//### Código Inicial

// // Array para guardar los destinos
// var destinos = [];

// // Función para registrar un destino de viaje
// function registrarDestino(destino, fecha, transporte) {
//     // TODO: Crear un objeto con los datos del destino
//     var nuevoViaje = {
//         destino: destino,
//         fecha: fecha,
//         transporte: transporte,
//         costo: calcularCosto(destino, transporte)
//     };

//     destinos.push(nuevoViaje);
// }

// // Función para calcular el costo del viaje
// function calcularCosto(destino, transporte) {
//     var costoBase = 0;

//     // Costo base por destino
//     if (destino === "Paris") {
//         costoBase = 500;
//     } else if (destino === "Londres") {
//         costoBase = 400;
//     } else if (destino === "New York") {
//         costoBase = 600;
//     }

//     // Costo adicional por tipo de transporte
//     if (transporte === "Avión") {
//         costoBase += 200;
//     } else if (transporte === "Tren") {
//         costoBase += 100;
//     }

//     return costoBase;
// }

// // Función para mostrar el itinerario de los viajes registrados
// function mostrarItinerario() {
//     // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
//     for (var i = 0; i < destinos.length; i++) {
//         var viaje = destinos[i];
//         console.log("Destino: " + viaje.destino);
//         console.log("Fecha: " + viaje.fecha);
//         console.log("Transporte: " + viaje.transporte);
//         console.log("Costo: $" + viaje.costo);
//         console.log("---------------------------");
//     }
// }


// Arreglo para guardar los destinos (no se reasigna, solo se modifica)
const destinos = [];

// Tabla de costos base por destino
const COSTO_DESTINO = {
    'Paris': 500,
    'Londres': 400,
    'New York': 600,
};

// Tabla de costo adicional por transporte
const COSTO_TRANSPORTE = {
    'Avión': 200,
    'Tren': 100,
};

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte) => {
    const costoBaseDestino = COSTO_DESTINO[destino] || 0;
    const costoTransporte = COSTO_TRANSPORTE[transporte] || 0;

    return costoBaseDestino + costoTransporte;
};

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte),
    };

    destinos.push(nuevoViaje);
};


// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    if (destinos.length === 0) {
        console.log('No hay viajes registrados todavía.');
        return;
    }

    destinos.forEach((viaje, index) => {
        console.log(`Viaje #${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log('---------------------------');
    });
};