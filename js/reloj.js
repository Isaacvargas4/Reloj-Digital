

const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    let horaActual = `${hora}:${minutos}:${segundos}`;


    document.getElementById("hora").innerHTML = horaActual;

    const dias = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'];
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    let dia = fecha.getDate();
    let diaSemana = dias[fecha.getDay()];
    let mesAño = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}, ${mesAño}, del ${año}`;

    console.log(fechaTexto)

    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");



}

const formatoHora= (hora) =>{
    if(hora < 10)
        hora = "0" + hora;
        return hora;
    

}

setInterval(mostrarReloj, 1000)

