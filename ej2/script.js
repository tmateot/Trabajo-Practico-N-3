const palabrasGuardadas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const entradaTexto = document.getElementById("entradaTexto");
const listaPalabras = document.getElementById("listaPalabras");
const info = document.getElementById("info");
const btnBuscar = document.getElementById("btnBuscar");

function mostrarPalabras(palabrasFiltradas) {
  listaPalabras.innerHTML = "";
  if (palabrasFiltradas.length === 0) {
    info.textContent = "No se encontro nada";
    return;
  }
  info.textContent = "";
  palabrasFiltradas.forEach(p => {
    const item = document.createElement("li");
    item.textContent = p;
    listaPalabras.appendChild(item);
  });
}

btnBuscar.addEventListener("click", () => {
  const texto = entradaTexto.value.trim().toLowerCase();
  if (texto === "") {
    info.textContent = "El campo esta vacio";
    listaPalabras.innerHTML = "";
    return;
  }
  const resultado = palabrasGuardadas.filter(p => p.toLowerCase().includes(texto));
  mostrarPalabras(resultado);
});
