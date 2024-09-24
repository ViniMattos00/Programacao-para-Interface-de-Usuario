import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Menu from "../components/Menu";
import MenuLateral from "../components/MenuLateral";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) throw new Error("Erro ao buscar dados");
        const data = await response.json();
        // Extrair todas as matérias de todos os professores
        const allMaterias = data.professores.flatMap(professor => professor.materias);
        setTurmas(allMaterias);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Menu menuOpen={setOpen} open={open} setOpenModal={setOpenModal} />
      <MenuLateral open={open} turmas={turmas} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div >
        {turmas.map((materia) => (
          <Card
            key={materia.id}
            title={materia.titulo}
            imageUrl={materia.fotoCapa}
            description={materia.titulo} // Pode adicionar uma descrição mais detalhada se disponível
          />
        ))}
      </div>
    </>
  );
}
