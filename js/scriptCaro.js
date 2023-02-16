let base_preguntas = readText("json/base-preguntas.json");
let interprete_bp = JSON.parse(base_preguntas);
let n = 0;
let i = 0;

function next(){
  aumentar = ++n;
  i = aumentar;
  escogerPregunta(i);
}

function anterior(){
  disminuir = --n;
  i = disminuir;
  escogerPregunta(i);
}

escogerPregunta(i);

function escogerPregunta(n) {
  let pregunta = interprete_bp[n];

  select_id("preg").innerHTML = pregunta.pregunta;
  select_id("aut").innerHTML = pregunta.autor;
  select_id("resp").innerHTML = pregunta.respuesta;
  select_id("img").setAttribute("src", pregunta.imagen);

/*  if(pregunta.autorId === 1){
   select_id("card").style.backgroundColor = "#DDCFF4";
    select_id("card-back").style.backgroundColor = "#DDCFF4";
  }
*/
};


function select_id(id) {
  return document.getElementById(id)
}

function style(id) {
  return select_id(id).style
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
};

/* function mostrarDatos() {

  fetch('json/base-preguntas.json')
    .then(res => res.json())
    .then(datos => {
      console.log(datos)

      let htmlContentToAppend = "";

      for (let valor of datos) {

        htmlContentToAppend +=
          `
      <div class="col-3" >
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front p-4">
                <img
                  src="img/libro1.jpg"
                  alt="Avatar"
                  style="max-height: 300px"
                />
                <h6 class="card-title m-4"> ${valor.pregunta} </h6>
                <div class="card-footer text-muted">
                  ${valor.autor}
                </div>
              </div>
              <div class="flip-card-back">
                <p>
                  ${valor.respuesta}
                </p>
              </div>
            </div>
          </div>
          </div>
        `
      }
      contenedor.innerHTML = htmlContentToAppend;
    });
}

mostrarDatos(); */


