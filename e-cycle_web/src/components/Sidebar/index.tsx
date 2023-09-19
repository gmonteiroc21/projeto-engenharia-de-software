import { HandPhoto } from "@/assets";
import { Container, RouteContainer, UserContainer } from "./styles";
import Link from "next/link";
import { House } from "@phosphor-icons/react";

interface SidebarProps {
  user: "coletor" | "descartador";
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <Container>
      <UserContainer>
        <img className="UserPhoto" src={HandPhoto.src} alt="Foto do usuário" />
        Jaque Line
      </UserContainer>
      <RouteContainer>
        <Link href={"/home"}>Home</Link>
        {user === "coletor" ? (
          <Link href={"/descarte"}>Descarte</Link>
        ) : (
          <Link href={"/map"}>Mapa</Link>
        )}
      </RouteContainer>
      <h3>Logout</h3>
    </Container>
  );
}
