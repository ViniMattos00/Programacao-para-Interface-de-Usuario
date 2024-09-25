import { useState, useEffect } from "react";
import "../styles/global.css";
import Menu from "../components/Menu";
import MenuLateral from "../components/MenuLateral";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [professores, setProfessores] = useState([]); 
  const [disciplinas, setDisciplinas] = useState([]); 

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_classes");
        const data = await response.json();
        setProfessores(data);

        // Transformar o JSON em uma lista de disciplinas (matérias)
        const disciplinasTransformadas = data.flatMap((professor) =>
          professor.materias.map((materia) => ({
            ...materia,
            professor: professor.nome, 
            fotoProfessor: professor.foto // Adicionar a foto do professor
          }))
        );
        setDisciplinas(disciplinasTransformadas); 
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };

    fetchProfessores();
  }, []); 

  return (
    <>
      <Menu menuOpen={setOpen} open={open} setOpenModal={setOpenModal} />
      <div className="container">
        <MenuLateral open={open} turmas={disciplinas} />
        {disciplinas.length > 0 ? (
          <div className="containerCards">
            {disciplinas.map(({ id, titulo, professor, fotoCapa, fotoProfessor, corIcon }) => (
              <Card 
                key={id} 
                nome={titulo} 
                descricao={professor} 
                urlImg={fotoCapa} // Passar a imagem de capa da matéria
                fotoProfessor={fotoProfessor} // Passar a foto do professor
                corIcon={corIcon} // Passar a cor do ícone
              />
            ))}
          </div>
        ) : (
          <div className="mensagemSmTurma">
            <img src="https://media0.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" />
            <p className="mensagem">Nenhuma turma encontrada</p>
          </div>
        )}
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
}
