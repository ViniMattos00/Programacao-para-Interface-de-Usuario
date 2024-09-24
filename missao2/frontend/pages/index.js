import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_classes");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const jsonData = await response.json();
      setData(jsonData); // Atualiza o estado com o JSON retornado
    } catch (err) {
      setError(err.message);
    }
  };

  return <></>;
}
