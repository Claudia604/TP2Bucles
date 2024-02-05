/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar
un mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje. */

const edad = parseFloat(prompt("Ingrese su edad"));
console.log(`Ingreso su edad: ${edad}`);

if (edad >= 18) {
  document.write(`<p>Edad: ${edad}. Usted ya puede conducir</p>`);
  alert("Usted ya puede conducir");
} else if (edad < 18) {
  document.write(`<p>Edad: ${edad}. Usted no puede conducir</p>`);
  alert("Usted no puede conducir");
} else {
  document.write("<p>La edad ingresada no es un número valido</p>");
  alert("La edad indicada no es un numero valido");
}
