//declarar variables
let a = 5;
let b = 2;
//operacione
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let elevado = a ** b;
//salidas
document.getElementById("suma").innerHTML = "La suma de " + a + " + " + b + " = " + suma;
document.getElementById("resta").innerHTML = "La resta de " + a + " - " + b + " = " + resta;
document.getElementById("multiplicacion").innerHTML = "La multiplicacion de " + a + " * " + b + " = " + multiplicacion;
document.getElementById("division").innerHTML = "La division de " + a + " / " + b + " = " + division;
document.getElementById("elevado").innerHTML = "La exponenciacion de " + a + " ^ " + b + " = " + elevado;