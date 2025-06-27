import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || a === 0) {
      setMensaje('Datos invalidos');
      setColor('gris');
      setImc(null);
      return;
    }

    const resultado = p / (a * a);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setMensaje('Nivel bajo');
      setColor('amarillo');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setMensaje('Nivel normal');
      setColor('verde');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setMensaje('Nivel de sobrepeso');
      setColor('naranja');
    } else {
      setMensaje('Nivel de obesidad');
      setColor('rojo');
    }
  };

  return (
    <div className="contenedor">
      <h2>Calculadora de peso</h2>

      <input
        type="number"
        placeholder="Peso en kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Altura en metros"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular</button>

      {imc && (
        <div className={`mensaje ${color}`}>
          <p>Tu IMC es: {imc}</p>
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}

export default App;
