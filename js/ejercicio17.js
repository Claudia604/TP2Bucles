/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1 */

const vocales = ["a", "e", "i", "o", "u"];
const texto = prompt("Introduce un texto");
const min = texto.toLowerCase();
let posicion = 0;
let parar = false;
for (let i = 0; i < min.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] == min.charAt(i)) {
      posicion = i;
      parar = true;
      break;
    }
  }
  if (parar) {
    break;
  }
}
document.write("La primera vocal está en la posición " + posicion);
