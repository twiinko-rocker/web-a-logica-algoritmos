const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gift, giftName, index = 0) {
    if (index === gifts.length) {
        return `${giftName} no se encontró en la lista de regalos.`;
    }
    if (gifts[index] === giftName) {
        return `${giftName} se encontró en la lista de regalos.`;
    }
    return findGift(gift, giftName, index + 1);

}

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
// Salida esperada:
// "Camión no está en la lista."
console.log(findGift(gifts, giftToFind));