var today = new Date();
var day = today.getDate();
var mes =today.getMonth();
var anio =today.getFullYear();

// crea un elemento div para almacenar el contenido
var contentDiv = document.createElement('div');

// agrega el HTML al div
contentDiv.innerHTML = `
  <b><p><h1>¡Apresúrese!</h1></p></b>
  <h2><p>El plazo máximo</p></h2>
  <h2><p>Para inscribirse es </p></h2>
  <h2><p>solo <span> 2 </span> días</p></h2>
  <h2><p>despues de la</p></h2>
  <h2><p>siguiente fecha:</p></h2>
  <h1>${day} /0${mes} /${anio}</h1>
`;

// agrega el div con el contenido al DOM
document.getElementById('campoDeTexto').appendChild(contentDiv);