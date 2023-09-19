import { Container, GreenBackground } from "./styles";
import { Navbar, Sidebar } from "..";
import { ReactElement, useEffect, useState } from "react";
import { AtivacaoDesativacaoProvider } from "@/contexts/button";

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
    <AtivacaoDesativacaoProvider>
      <Navbar />
      {larguraDaTela <= 700 && <Sidebar user={"coletor"} />}
      <Container>
        {children}
        <GreenBackground />
      </Container>
    </AtivacaoDesativacaoProvider>
  );
}
