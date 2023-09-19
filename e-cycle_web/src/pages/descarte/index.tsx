import { Navbar } from "@/components";
import {
  BaseInput,
  Container,
  ErrorSpan,
  FormContainer,
  GreenBackground,
  InputContainer,
  StyledLabel,
  StyledTitle,
  SubmitInput,
  UploadContainer,
  UploadInput,
} from "./styles";
import { Layout } from "@/components/Layout";

export default function Descarte() {
  return (
    <Layout>
      <FormContainer>
        <StyledTitle>Onde há algum descarte?</StyledTitle>
        <InputContainer>
          <StyledLabel>Nome do material</StyledLabel>
          <BaseInput placeholder="Digite o nome" /* {...register("name")} */ />
          {/*  {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>} */}
        </InputContainer>

        <SubmitInput /* type="submit" */ value="Enviar" />
      </FormContainer>
    </Layout>
  );
}
