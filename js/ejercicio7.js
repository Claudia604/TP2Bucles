/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al 
número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

let numero = prompt("Introduce número de repeticiones");
if (Number(numero) == numero) {
  if (numero > 0 && numero <= 50) {
    let rep, i;
    for (i = numero; i >= 1; i--) {
      for (rep = i; rep >= 1; rep--) {
        document.write(i);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
} else {
  alert("No has introducido un número");
}
