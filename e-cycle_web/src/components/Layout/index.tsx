import { Container, GreenBackground } from "./styles";
import { Navbar } from "..";
import { ReactElement } from "react";

interface LayoutChildren {
  children: ReactElement;
}

export function Layout({ children }: LayoutChildren) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
        <GreenBackground />
      </Container>
    </>
  );
}
