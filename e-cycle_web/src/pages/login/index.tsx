import Image from "next/image";
import {
  Container,
  Content,
  LoginForm,
  Title,
  BaseInput,
  InputContainer,
  ErrorSpan,
  StyledLabel,
  SubmitInput,
} from "./styles";
import { PhoneInGreen } from "@/assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Digite um email!")
    .email("O email precisa ser válido!"),
  password: z.string().nonempty("Digite sua senha!"),
});

type LoginFormInput = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(LoginFormSchema),
  });
  const onSubmit: SubmitHandler<LoginFormInput> = (data: LoginFormInput) => {
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
        <Title>Hello again</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
          <SubmitInput type="submit" value="Login" />
        </LoginForm>
      </Content>
    </Container>
  );
}
