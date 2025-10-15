console.log('Hola EscuelaIT y Vite');

document.addEventListener('DOMContentLoaded', function() {
  let boton = document.getElementById('miboton');
  boton.addEventListener('click', function() {
    boton.textContent = 'has hecho click';
  });
})

$(document).ready(function() {
  $("#menu").on("click", function() {
    $("#modal").fadeIn(300).css("display", "flex");
  });

  $("#cerrar").on("click", function() {
    $("#modal").fadeOut(300);
  });
});