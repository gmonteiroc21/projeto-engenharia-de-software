import { HandPhoto, Logo, NavButton } from "@/assets";
import { NavbarContainer, Navigation, UserContainer } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAtivacaoDesativacao } from "../../contexts/button";
export const Navbar = () => {
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);
  const { ativado, toggleAtivacao } = useAtivacaoDesativacao();

  useEffect(() => {
    const atualizarTamanhoDaTela = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener("resize", atualizarTamanhoDaTela);

    return () => {
      window.removeEventListener("resize", atualizarTamanhoDaTela);
    };
  }, []);
  const router = useRouter();
  console.log(larguraDaTela);
  return (
    <NavbarContainer>
      {larguraDaTela <= 700 && (
        <Image
          className="buttonNav"
          src={NavButton}
          alt="botao que ative sidebar"
          onClick={toggleAtivacao}
        />
      )}
      <Image src={Logo} alt="Logo do E-cycle" />
      <Navigation>
        <ul>
          <li>
            <Link
              href="/home"
              className={router.pathname === "/home" ? "isActive" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={router.pathname === "/sobre" ? "isActive" : ""}
            >
              Sobre
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/descarte"
              className={router.pathname === "/descarte" ? "isActive" : ""}
            >
              Descarte
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/mapa">Mapa</Link>
          </li>
        </ul>
      </Navigation>
      <UserContainer>
        <UserContainer>Jaque Line</UserContainer>
        <img className="UserPhoto" src={HandPhoto.src} alt="Foto do usuário" />
      </UserContainer>
    </NavbarContainer>
  );
};
