/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el 
signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo 
“hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

const texto = prompt("Introduce un texto:");
const char = texto.length;
let caracter;
let i;
for (i = 0; i < char; i++) {
  caracter = texto.charAt(i);
  if (i == char - 1) {
    document.write(caracter);
  } else {
    document.write(caracter + "-");
  }
}
