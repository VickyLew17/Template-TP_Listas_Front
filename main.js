
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas(comidas);
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');
const formComida = document.getElementById("addFoodForm");




function mostrarComidas(lista) {

  container.innerHTML = "";

  lista.forEach(comida => {

    container.innerHTML +=
      `
      <article class="card">
        <span class="categoria">${comida.categoria}</span>
        <h2 class="nombre-card">${comida.nombre}</h2>
        <p class="provincia">${comida.provincia}</p>        
      </article>
    `;
  });
}


mostrarComidas();

formComida.addEventListener("submit", (event) => {

  event.preventDefault();

  const nuevaComida = {
    nombre: event.target.nombre.value,
    categoria: event.target.categoria.value,
    provincia: event.target.provincia.value
  }

  comidas.push(nuevaComida);

  mostrarComidas();

  formComida.reset();
});

const buscador = document.getElementById("buscador")
const filtroCategoria = document.getElementById("filtroCategoria")
const filtroProvincia = document.getElementById("filtroProvincia")

function filtrar() {
  const comidasFiltradas = comidas.filter(comida => {
    return comida.categoria.includes(filtroCategoria.value)
        && comida.provincia.includes(filtroProvincia.value)

  })
  mostrarComidas(comidasFiltradas);
}

function buscar() {
  const texto = buscador.value.toLowerCase()

  const comidasFiltradas = comidas.filter( comida => {
    return comida.nombre.toLowerCase().includes(texto)
        || comida.provincia.toLowerCase().includes(texto)
        || comida.categoria.toLowerCase().includes(texto)
  })

  mostrarComidas(comidasFiltradas);
}


filtroCategoria.addEventListener("change", filtrar)
filtroProvincia.addEventListener("change", filtrar)
buscador.addEventListener("input", buscar)

