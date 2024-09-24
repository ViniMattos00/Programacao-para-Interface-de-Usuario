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
  const [codigosTurmas, setCodigosTurmas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_classes");
        if (!response.ok) throw new Error("Erro ao buscar dados");
        const data = await response.json();
        const allMaterias = data.professores.flatMap(professor =>
          professor.materias.map(materia => ({
            ...materia,
            professorNome: professor.nome,
            professorFoto: professor.foto
          }))
        );
        setTurmas(allMaterias);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  const turmasFiltradas = turmas.filter(turma => codigosTurmas.includes(turma.id));

  const handleJoin = (codigo) => {
    setCodigosTurmas(prevCodigos => {
      if (!prevCodigos.includes(codigo)) {
        return [...prevCodigos, codigo];
      }
      return prevCodigos;
    });
  };

  return (
    <>
      <Menu menuOpen={setOpen} open={open} setOpenModal={setOpenModal} />
      <MenuLateral open={open} turmas={turmas} />
      {openModal && <Modal setOpenModal={setOpenModal} onJoin={handleJoin} />}
      <div className="cards">
        {turmasFiltradas.map((materia) => (
          <Card
            key={materia.id}
            title={materia.titulo}
            imageUrl={materia.fotoCapa}
            description={materia.titulo}
            professorName={materia.professorNome}
            professorPhoto={materia.professorFoto}
          />
        ))}
      </div>
    </>
  );
}
