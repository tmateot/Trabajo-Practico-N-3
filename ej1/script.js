const entrada1 = document.getElementById("entrada1");
const entrada2 = document.getElementById("entrada2");
const selectorOperacion = document.getElementById("selectorOperacion");
const btnEjecutar = document.getElementById("btnEjecutar");
const textoResultado = document.getElementById("textoResultado");

btnEjecutar.addEventListener("click", () => {
  const valorA = parseFloat(entrada1.value);
  const valorB = parseFloat(entrada2.value);
  let resultado;

  switch (selectorOperacion.value) {
    case "suma":
      resultado = valorA + valorB;
      break;
    case "resta":
      resultado = valorA - valorB;
      break;
    case "producto":
      resultado = valorA * valorB;
      break;
    case "division":
      resultado = valorB !== 0 ? valorA / valorB : "No se puede dividir por cero";
      break;
  }

  textoResultado.textContent = `Resultado: ${resultado}`;
});
