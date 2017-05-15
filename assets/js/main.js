var cerrar = document.getElementsByClassName('cerrar');

for (var i = 0; i < cerrar.length; i++) {
  cerrar[i].addEventListener('click', quitarImagen);
};

function quitarImagen() {
  var padre = this.parentElement;
  padre.style.display = 'none';
};

function restaurarImg() {
  for (var i = 0; i < cerrar.length; i++) {
    cerrar[i].parentElement.style.display = "inline-block";
  };
};

var textoIzq = document.getElementById("columna1");
var textoDer = document.getElementById("columna2");
var cont = 0;
//Función que verifica los links
function verificaClick(event) {
  cont++;
  var obj = event.target;
  if (cont % 2 != 0) {
    ocultar(obj);
  } else if (cont % 2 == 0) {
    mostrar(obj);
  }
}

function ocultar(obj) {
  if (obj.id == 1) {
    textoIzq.style.display = "none";
  } else if (obj.id == 2) {
    textoDer.style.display = "none";
  }
}
// Función para mostrar el texto
function mostrar(obj) {
  if (obj.id == 1) {
    textoIzq.style.visibility = "visible"
  } else if (obj.id == 2) { //Caso boton Exhibición
    textoDer.style.visibility = "visible";
  }
}

//funcion menu//
