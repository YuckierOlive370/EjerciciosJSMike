function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "Ingresa todos los números";
    } else {
        if (altura <= 0) {
            document.getElementById("resultado").innerHTML = "Ingresa una altura válida.";
            return;
        }

        let imc = peso / (altura * altura);
        let grado = "";

        if (imc < 18.5) {
            grado = "Bajo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            grado = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            grado = "Sobrepeso";
        } else {
            grado = "Obesidad";
        }

        document.getElementById("resultado").innerHTML =
            "Tu IMC es: " + imc.toFixed(2) + "<br>Clasificación: " + grado;
    }
}

function limpiar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").innerHTML = "";
}
