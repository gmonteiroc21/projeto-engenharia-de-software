import { HandPhoto, Logo } from "@/assets";
import {
  StyledButton,
  Title,
  Paragraph,
  OptionContainer,
  ButtonsContainer,
  InformationContainer,
  GreenBackground,
  Content,
} from "./styles";
import Image from "next/image";
import { Navbar } from "@/components";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <OptionContainer>
          <Image
            className="HandImage"
            src={HandPhoto}
            alt="Imagem de globo terra na mão de uma pessoa"
          />
          <ButtonsContainer>
            <StyledButton>QUERO RECOLHER</StyledButton>
            <StyledButton>QUERO DESCARTAR</StyledButton>
          </ButtonsContainer>
        </OptionContainer>
        <InformationContainer>
          <Title>O QUE É E-CYCLE</Title>
          <Paragraph>
            Plataforma web que visa facilitar a coleta de lixo eletrônico
            através do mapeamento dos pontos de coleta disponíveis. Aqui você
            pode registrar locais onde possuem lixo eletrônico para que as
            entidades coletoras possam identificar e planejar as melhores rotas
            para a coleta eficiente e sustentável desses resíduos eletrônicos.
          </Paragraph>
        </InformationContainer>
      </Content>
    </Layout>
  );
}
