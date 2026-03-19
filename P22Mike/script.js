function calcular() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultado").value = "Ingresa todos los números";
    } else {
        // Validar que a no sea cero
        if (a === 0) {
            alert("El valor de 'a' no puede ser 0 en una ecuación cuadrática.");
            return;
        }

        // Calcular discriminante
        let discriminante = (b * b) - (4 * a * c);

        if (discriminante < 0) {
            document.getElementById("resultado").value = "No hay soluciones reales";
        } else {
            let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

            // Mostrar resultados
            document.getElementById("resultado").value = "x1 = " + x1 + " ; x2 = " + x2;
        }
    }
}

function limpiar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("operacion").value = "suma";
}