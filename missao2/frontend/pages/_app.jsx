// pages/_app.js
import { useState } from "react";
import "../styles/global.css";
import Menu from "../components/Menu";
import MenuLateral from "../components/MenuLateral";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const disciplinas = [];

  return (
    <>
      <Menu menuOpen={setOpen} open={open} setOpenModal={setOpenModal} />
      <div className="container">
        <MenuLateral open={open} turmas={disciplinas} />
        {disciplinas.length > 0 ?
          <div className="containerCards">
              {disciplinas.map(({ nome }, index) => (
                <Card key={index} nome={nome} />
              ))}
          </div>
          : <div className="mensagemSmTurma">
            <img src="https://media0.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" />
            <p className="mensagem">Nenhuma turma encontrada</p>
          </div>
          }
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
}
