import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Ingresa números válidos');
      return;
    }

    switch (operacion) {
      case 'suma':
        setResultado(a + b);
        break;
      case 'resta':
        setResultado(a - b);
        break;
      case 'multiplicacion':
        setResultado(a * b);
        break;
      case 'division':
        setResultado(a / b);
        break;
      default:
        setResultado('Operación no válida');
    }
  };

  const desactivarBoton = operacion === 'division' && parseFloat(num2) === 0;

  return (
    <div className='contenedor'>
      <h2>Calculadora</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>
      <br /><br />

      <button onClick={calcular} disabled={desactivarBoton}>
        Calcular
      </button>

      <br /><br />
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}

export default App;
