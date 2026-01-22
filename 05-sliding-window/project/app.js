const findLongestWord = (str) => {
    const words = str.split(' '); // Split the string into an array of words
    let longestWord = ''; // Initialize the longest word as an empty string

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Update longestWord if the current word is longer
        }   
    }

    return longestWord;
}   

const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"