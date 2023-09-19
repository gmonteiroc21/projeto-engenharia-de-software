import { PhoneInGreen } from "@/assets";
import {
  Container,
  InputContainer,
  SignUpForm,
  Title,
  Content,
  StyledLabel,
  ErrorSpan,
  BaseInput,
  SubmitInput,
} from "./styles";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const SignUpFormSchema = z
  .object({
    razao_social: z.string().nonempty("O nome é obrigatório!"),
    email: z
      .string()
      .nonempty("O email é obrigatório!")
      .email("Insira um email válido!"),
    password: z.string().nonempty("A senha é obrigatória"),
    confirmPassword: z.string().nonempty("É obrigatório confirmar a senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas devem ser iguais!",
    path: ["confirmPassword"],
  });
type SignUpFormInput = z.infer<typeof SignUpFormSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const onSubmit: SubmitHandler<SignUpFormInput> = (data: SignUpFormInput) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <Image
        className="PhonePlantPhoto"
        src={PhoneInGreen}
        alt="Imagem de celulares em meio a plantas"
      />
      <Content>
        <Title>Welcome to E-Cycle</Title>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <StyledLabel>Razão social</StyledLabel>
            <BaseInput
              placeholder="Digite sua razão social"
              {...register("razao_social")}
            />
            {errors.razao_social && (
              <ErrorSpan>{errors.razao_social.message}</ErrorSpan>
            )}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Email</StyledLabel>
            <BaseInput placeholder="Digite seu email" {...register("email")} />
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Senha</StyledLabel>
            <BaseInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && (
              <ErrorSpan>{errors.password.message}</ErrorSpan>
            )}
          </InputContainer>
          <InputContainer>
            <StyledLabel>Confirmar senha</StyledLabel>
            <BaseInput
              type="password"
              placeholder="Digite sua senha novamente"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>
            )}
          </InputContainer>
          <SubmitInput type="submit" value="Cadastrar" />
          <Link href="/login">Já tem uma conta? Faça login!</Link>
        </SignUpForm>
      </Content>
    </Container>
  );
}
