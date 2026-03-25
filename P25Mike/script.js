function generarTablas() {
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""; // limpiar antes de generar

    // Ciclo para las tablas del 1 al 10
    for (let i = 1; i <= 10; i++) {
        let tablaHTML = `<div class="tabla"><h3>Tabla del ${i}</h3>`;
        
        // Ciclo interno para multiplicaciones
        for (let j = 1; j <= 10; j++) {
        tablaHTML += `${i} x ${j} = ${i*j}<br>`;
        }
        
        tablaHTML += "</div>";
        contenedor.innerHTML += tablaHTML;
    }
}