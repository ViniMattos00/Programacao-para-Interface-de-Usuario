// pages/_app.js
import { useState } from "react";
import "../styles/global.css";
import Menu from "../components/Menu";
import MenuLateral from "../components/MenuLateral";
import Modal from "../components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);
  const turmas = [];

  return (
    <>
      <Menu menuOpen={setOpen} open={open} setOpenModal={setOpenModal} />
      <MenuLateral open={open} turmas={turmas} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
}
