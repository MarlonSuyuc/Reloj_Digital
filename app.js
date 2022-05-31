const clock = () => {
  let today = new Date();
  let hora = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();
  let periodo = "AM";
  let mes = today.getMonth();
  let dia = today.getDay();
  let fechaDia = today.getDate();
  let año = today.getFullYear();
  let meses = [
    "Ene",
    "feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  let mostrarmes = "";
  for (let i = mes; i <= 12; i++) {
    mostrarmes = meses[mes];
  }
  let dias = [
    "",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let mostrardia = "";
  for (let i = dia; i <= 7; i++) {
    mostrardia = dias[dia];
  }

  if (hora >= 12) {
    periodo = "PM";
  } else if (hora < 10) {
    hora = "0" + hora;
  } else if (minutos < 10) {
    minutos = "0" + minutos;
  } else if (segundos < 10) {
    segundos = "0" + segundos;
  }

  hora = hora > 12 ? hora % 12 : hora;
  const d = document;
  d.querySelector(".hora").textContent = hora;
  d.querySelector(".minutos").textContent = minutos;
  d.querySelector(".periodo").textContent = periodo;
  d.querySelector(".segundos").textContent = segundos;
  d.querySelector(".hora").textContent = hora;
  d.querySelector(".mes-nombre").textContent = mostrarmes;
  d.querySelector(".dia-nombre").textContent = mostrardia;
  d.querySelector(".dia-numero").textContent = fechaDia;
  d.querySelector(".año").textContent = año;
};
let actualizarHora = setInterval(clock, 1000);
