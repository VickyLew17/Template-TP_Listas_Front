
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas();
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');
const formComida = document.getElementById("addFoodForm");


function mostrarComidas() {

  container.innerHTML = "";

  comidas.forEach(comida => {

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

