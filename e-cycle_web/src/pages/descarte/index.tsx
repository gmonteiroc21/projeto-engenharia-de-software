import { Navbar } from "@/components";
import {
  BaseInput,
  Container,
  ErrorSpan,
  FormContainer,
  InputContainer,
  StyledLabel,
  StyledTitle,
  SubmitInput,
} from "./styles";
import { Layout } from "@/components/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const DescarteSchema = z.object({
  endereco: z.string().nonempty("Digite um endereço"),
});

type DescarteInput = z.infer<typeof DescarteSchema>;

export default function Descarte() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DescarteInput>({
    resolver: zodResolver(DescarteSchema),
  });
  const onSubmit: SubmitHandler<DescarteInput> = (data: DescarteInput) => {
    console.log(data);
    reset();
  };
  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Onde há algum descarte?</StyledTitle>
        <InputContainer>
          <StyledLabel>Endereço</StyledLabel>
          <BaseInput
            placeholder="Digite o endereço"
            {...register("endereco")}
          />
          {errors.endereco && <ErrorSpan>{errors.endereco.message}</ErrorSpan>}
        </InputContainer>

        <SubmitInput type="submit" value="Enviar" />
      </FormContainer>
    </Layout>
  );
}
