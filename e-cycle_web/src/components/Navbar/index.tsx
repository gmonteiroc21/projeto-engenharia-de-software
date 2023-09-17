import { HandPhoto, Logo } from "@/assets";
import { NavbarContainer, Navigation, UserContainer } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <NavbarContainer>
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
