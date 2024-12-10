// Tasas de cambio locales
const monedas = {
  USD: 0.1645,
  EUR: 0.1568,
  RUB: 16.4485,
  ARS: 167.0842,
  COP: 726.4921,
  CRC: 83.301,
  UYU: 7.1620,
};

// Monedas y países
const CodMonedas = ["USD", "EUR", "RUB", "ARS", "COP", "CRC", "UYU"];
const Paises = ["USA", "EUROS", "RUSIA", "ARGENTINA", "COLOMBIA", "COSTA RICA", "URUGUAY"];

// Agregar un dropdown dinámico para una moneda
function addSelector() {
  // Crear contenedor para el selector
  const CampoMoneda = document.createElement("div");
  CampoMoneda.classList.add("CampoMoneda", "mb-3");

  // Crear dropdown
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropleft");

  // Botón principal del dropdown
  const button = document.createElement("button");
  button.classList.add("btn", "btn-warning", "dropdown-toggle", "mt-2", "mb-3");
  button.setAttribute("type", "button");
  button.setAttribute("data-toggle", "dropdown");
  button.textContent = "Selecciona una moneda";

  // Menú del dropdown
  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");

  // Llenar el menú con monedas
  CodMonedas.forEach((monedasl, index) => {

    //Creamos la lista de los paices
    const item = document.createElement("a");
    item.classList.add("dropdown-item");
    item.textContent = Paises[index];

    item.addEventListener("click", () => {
      button.textContent = Paises[index]; // Actualiza el texto del botón
      button.dataset.monedasl = monedasl; // Guarda la moneda seleccionada
      actulizar(monedasl, resultado); // Actualiza la conversión
    });

    dropdownMenu.appendChild(item);
  });

  // Botón para eliminar el elemento creado
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "ml-3", "mt-2", "mb-3");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => {
    CampoMoneda.remove(); // Eliminar el contenedor completo
  });

  // Crear contenedor para encapsular el resultado
  const ContenedorResul = document.createElement("div");
  ContenedorResul.classList.add("container", "border", "rounded", "bg-light", "mt-2", "alert-light");

  // Resultado de la conversión
  const resultado = document.createElement("h3");
  resultado.textContent = "Selecciona una cantidad y moneda";
  resultado.classList.add("col-sm-12");

  // Ensamblar el resultado con la bandera
  ContenedorResul.appendChild(resultado);

  // Ensamblar el dropdown
  dropdown.appendChild(button);
  dropdown.appendChild(dropdownMenu);

  CampoMoneda.appendChild(dropdown);
  CampoMoneda.appendChild(deleteButton);
  CampoMoneda.appendChild(ContenedorResul); // Añadir el contenedor del resultado al selector

  // Agregar al DOM
  document.getElementById("CampoMoneda").appendChild(CampoMoneda);

  //busca el input con ide valor y agrega la funcion listen para cuando se relise un cambio 
  //en el input
  document.getElementById("valor").addEventListener("input", () => {//
    const MonedaSelec = button.dataset.monedasl; //obteneoms
    if (MonedaSelec) {
      actulizar(MonedaSelec, resultado);
    }
  });
}

// Actualizar la conversión
function actulizar(currency,resultElement) {
  const valor = parseFloat(document.getElementById("valor").value); 
  const rate = monedas[currency];
  if (rate) {
    const convertedValue = valor * rate;
    resultElement.textContent = `${valor} BRL = ${convertedValue.toFixed(2)} ${currency}`;
  } 
}

// Inicializar la app
function init() {
  // Configura evento para añadir nuevos selectores de moneda al dar click el boton Agregar Conversión
  document.getElementById("add-moneda").addEventListener("click",addSelector);
}

init();

/*HTML generado por la funcion addSelector*/

/*<div class="CampoMoneda mb-3">
  <!-- Dropdown -->
  <div class="dropleft">
    <!-- Botón principal del dropdown -->
    <button type="button" class="btn btn-warning dropdown-toggle mt-2 mb-3" data-toggle="dropdown">
      Selecciona una moneda
    </button>
    <!-- Menú del dropdown -->
    <div class="dropdown-menu">
      <a class="dropdown-item">USA</a>
      <a class="dropdown-item">EUROS</a>
      <a class="dropdown-item">RUSIA</a>
      <a class="dropdown-item">ARGENTINA</a>
      <a class="dropdown-item">COLOMBIA</a>
      <a class="dropdown-item">COSTA RICA</a>
      <a class="dropdown-item">URUGUAY</a>
    </div>
  </div>
  <!-- Boton para eliminar -->
  <button class="btn btn-danger ml-3 mt-2 mb-3">Eliminar</button>
  <!-- Contenedor del resultado -->
  <div class="container border rounded bg-light mt-2 alert-light">
    <h3 class="col-sm-12">Selecciona una cantidad y moneda</h3>
  </div>
</div>*/
