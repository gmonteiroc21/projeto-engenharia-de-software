import { PhoneInGreen } from "@/assets";
import {
  Container,
  InputContainer,
  LoginForm,
  Title,
  Content,
  StyledLabel,
  ErrorSpan,
  BaseInput,
  SubmitInput,
} from "./styles";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export default function Login() {
  const onSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) =>
    console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  return (
    <Container>
      <Image
        className="PhonePlantPhoto"
        src={PhoneInGreen}
        alt="Imagem de celulares em meio a plantas"
      />
      <Content>
        <Title>Welcome to E-Cycle</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <StyledLabel>Nome</StyledLabel>
            <BaseInput
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            />
            {errors.name && <ErrorSpan>Esse campo é obrigatório!</ErrorSpan>}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Email</StyledLabel>
            <BaseInput
              placeholder="Digite seu email"
              {...register("email", { required: true })}
            />
            {errors.email && <ErrorSpan>Esse campo é obrigatório!</ErrorSpan>}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Senha</StyledLabel>
            <BaseInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors.password && <ErrorSpan>Esse campo é obrigatório!</ErrorSpan>}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Confirmar senha</StyledLabel>
            <BaseInput
              type="password"
              placeholder="Digite sua senha novamente"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <ErrorSpan>Esse campo é obrigatório!</ErrorSpan>
            )}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Telefone</StyledLabel>
            <BaseInput
              placeholder="Digite seu telefone"
              {...register("phone")}
            />
            {errors.phone && <ErrorSpan>Esse campo é obrigatório!</ErrorSpan>}
          </InputContainer>
          <SubmitInput type="submit" value="Cadastrar" />
        </LoginForm>
      </Content>
    </Container>
  );
}
