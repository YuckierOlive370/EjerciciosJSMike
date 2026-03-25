function generarTablas() {
    const num = parseInt(document.getElementById("numero").value);
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""; // limpiar antes de generar

    if (isNaN(num) || num <= 0 || num > 100) {
        contenedor.innerHTML = "<p style='color:red;'>Por favor ingresa un número entero positivo y que este dentro del rango (1-100).</p>";
        return;
    }

    for (let i = 1; i <= num; i++) {
        let tablaHTML = `<div class="tabla"><h3>Tabla del ${i}</h3>`;
        
        for (let j = 1; j <= 10; j++) {
            tablaHTML += `${i} x ${j} = ${i*j}<br>`;
        }
        
        tablaHTML += "</div>";
        contenedor.innerHTML += tablaHTML;
    }
}