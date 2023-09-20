import { Container, GreenBackground } from "./styles";
import { Navbar, Sidebar } from "..";
import { ReactElement, useEffect, useState } from "react";
import { AtivacaoDesativacaoProvider } from "@/contexts/button";

interface LayoutChildren {
  children: ReactElement;
}

export function Layout({ children }: LayoutChildren) {
  return (
    <AtivacaoDesativacaoProvider>
      <Navbar user={"descartador"} />
      <Sidebar user={"coletor"} />
      <Container>
        {children}
        <GreenBackground />
      </Container>
    </AtivacaoDesativacaoProvider>
  );
}
