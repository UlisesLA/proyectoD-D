const transfondoURL = 'transfondos.json';


async function cargarJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.datos;
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    throw error; // Propaga el error
  }
}


function llenarSelect(selectElement, datos) {
  // Limpia las opciones existentes
  selectElement.innerHTML = '';

  // Itera sobre cada objeto en los datos y crea una opción en el select para cada uno
  datos.forEach(dato => {
    const opcion = document.createElement('option');
    opcion.value = dato.id; // Suponiendo que cada objeto tiene un ID que quieres usar como valor
    opcion.textContent = dato.nombre; // El texto de la opción es el nombre
    selectElement.appendChild(opcion); // Añade la opción al select
  });
}



// Supongamos que tienes varios selectores y archivos JSON
const configuraciones = [
  { selector: 'trasfondo', archivoJSON: 'transfondos.json' },
  { selector: 'raza', archivoJSON: 'razas.json'}
];

configuraciones.forEach(async (config) => {
  const datos = await cargarJSON(config.archivoJSON);
  const selectElement = document.getElementById(config.selector); 
  llenarSelect(selectElement, datos);
});

