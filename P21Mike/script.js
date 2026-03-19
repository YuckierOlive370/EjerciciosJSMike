function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado = "";

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Ingresa ambos números";
    } else {
        switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num2 !== 0 ? num1 / num2 : "Error: división por 0";
            break;
        case "elevado":
            resultado = num1 ** num2;
            break;
        }
    }

    document.getElementById("resultado").value = resultado;
}

function limpiar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("operacion").value = "suma";
}