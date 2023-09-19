import { Container, GreenBackground } from "./styles";
import { Navbar, Sidebar } from "..";
import { ReactElement, useEffect, useState } from "react";

interface LayoutChildren {
  children: ReactElement;
}

export function Layout({ children }: LayoutChildren) {
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    const atualizarTamanhoDaTela = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener("resize", atualizarTamanhoDaTela);

    return () => {
      window.removeEventListener("resize", atualizarTamanhoDaTela);
    };
  }, []);
  return (
    <>
      <Navbar />
      {larguraDaTela <= 700 && <Sidebar />}
      <Container>
        {children}
        <GreenBackground />
      </Container>
    </>
  );
}
