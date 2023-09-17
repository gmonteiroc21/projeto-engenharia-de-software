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

export default function Descarte() {
  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <StyledTitle>
            O que você quer <br /> descartar?
          </StyledTitle>
          <InputContainer>
            <StyledLabel>Nome do material</StyledLabel>
            <BaseInput
              placeholder="Digite o nome" /* {...register("name")} */
            />
            {/*  {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>} */}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Peso (g) </StyledLabel>
            <BaseInput
              placeholder="Digite o peso" /* {...register("name")} */
            />
            {/*  {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>} */}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Local</StyledLabel>
            <BaseInput
              placeholder="Digite o local" /* {...register("name")} */
            />
            {/*  {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>} */}
          </InputContainer>
          <UploadContainer>
            <StyledLabel>Foto</StyledLabel>
            <UploadInput value="Upload de arquivo" />
          </UploadContainer>

          <SubmitInput /* type="submit" */ value="Enviar" />
        </FormContainer>
        <GreenBackground />
      </Container>
    </>
  );
}
