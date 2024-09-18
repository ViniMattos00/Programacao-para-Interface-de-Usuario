import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const jsonData = await response.json();
      setData(jsonData);  // Atualiza o estado com o JSON retornado
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Frontend Next.js is running!</h1>
      <button onClick={fetchData}>Buscar Dados</button>

      {/* Mostrar os dados ou um erro, caso ocorra */}
      {data && (
        <div>
          <h2>Dados recebidos:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h2>Ocorreu um erro:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
