const hoy = new Date();

let diaSemana;
switch (hoy.getDay()) {
    case 0: diaSemana = "domingo"; break;
    case 1: diaSemana = "lunes"; break;
    case 2: diaSemana = "martes"; break;
    case 3: diaSemana = "miércoles"; break;
    case 4: diaSemana = "jueves"; break;
    case 5: diaSemana = "viernes"; break;
    case 6: diaSemana = "sábado"; break;
}

let mes;
switch (hoy.getMonth()) {
    case 0: mes = "Enero"; break;
    case 1: mes = "Febrero"; break;
    case 2: mes = "Marzo"; break;
    case 3: mes = "Abril"; break;
    case 4: mes = "Mayo"; break;
    case 5: mes = "Junio"; break;
    case 6: mes = "Julio"; break;
    case 7: mes = "Agosto"; break;
    case 8: mes = "Septiembre"; break;
    case 9: mes = "Octubre"; break;
    case 10: mes = "Noviembre"; break;
    case 11: mes = "Diciembre"; break;
}

const dia = hoy.getDate();
const anio = hoy.getFullYear();

const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} del año ${anio}`;

document.getElementById("fecha").textContent = mensaje;