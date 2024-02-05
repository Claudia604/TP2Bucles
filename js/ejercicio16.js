/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

const texto = prompt("Introduce un Texto:");
const char = texto.length;
let i;
let voltear;
let pantalla = "";
for (i = 0; i < char; i++) {
  voltear = texto.charAt(i);
  pantalla = voltear + pantalla;
}
document.write(pantalla);
