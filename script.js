// const alfabeto = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "Ñ",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// const inputOriginal = document.getElementById("input-original");
// const cifrador = document.getElementById("cifrador");
// const resultado = document.getElementById("resultado");
// const rango = document.getElementById("rango");

// const shifMessage = () => {
//   const wordArray = [...inputOriginal.value.toUpperCase()];
//   printChar(0, wordArray);
// };

// const printChar = (currentLetterIndex, wordArray) => {
//   if (wordArray.length === currentLetterIndex) return;
//   inputOriginal.value = inputOriginal.value.substring(1);
//   const spanChar = document.createElement("span");
//   resultado.appendChild(spanChar);
//   animateChar(spanChar).then(() => {
//     const charSinCodificar = wordArray[currentLetterIndex];
//     spanChar.innerHTML = alfabeto.includes(charSinCodificar)
//       ? alfabeto[
//           (alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) %
//             alfabeto.length
//         ]
//       : charSinCodificar;
//     printChar(currentLetterIndex + 1, wordArray);
//   });
// };

// const animateChar = (spanChar) => {
//   let cambiosDeLetra = 0;
//   return new Promise((resolve) => {
//     const intervalo = setInterval(() => {
//       spanChar.innerHTML =
//         alfabeto[Math.floor(Math.random() * alfabeto.length)];
//       cambiosDeLetra++;
//       if (cambiosDeLetra === 3) {
//         clearInterval(intervalo);
//         resolve();
//       }
//     }, 50);
//   });
// };

// const submit = (e) => {
//   e.preventDefault();
//   resultado.innerHTML = "";
//   shifMessage();
// };

// cifrador.onsubmit = submit;
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const inputOriginal = document.getElementById("input-original");
const cifrador = document.getElementById("cifrador");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");

const shiftMessage = () => {
  const wordArray = [...inputOriginal.value.toUpperCase()];
  printChar(0, wordArray);
};

const printChar = (currentLetterIndex, wordArray) => {
  if (wordArray.length === currentLetterIndex) return;
  inputOriginal.value = inputOriginal.value.substring(1);
  const spanChar = document.createElement("span");
  resultado.appendChild(spanChar);
  animateChar(spanChar).then(() => {
    const unencodedChar = wordArray[currentLetterIndex];
    spanChar.innerHTML = alphabet.includes(unencodedChar)
      ? alphabet[
          (alphabet.indexOf(unencodedChar) + parseInt(rango.value)) %
            alphabet.length
        ]
      : unencodedChar;
    printChar(currentLetterIndex + 1, wordArray);
  });
};

const animateChar = (spanChar) => {
  let letterChanges = 0;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      spanChar.innerHTML =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      letterChanges++;
      if (letterChanges === 3) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
};

const submit = (e) => {
  e.preventDefault();
  resultado.innerHTML = "";
  shiftMessage();
};

cifrador.onsubmit = submit;
