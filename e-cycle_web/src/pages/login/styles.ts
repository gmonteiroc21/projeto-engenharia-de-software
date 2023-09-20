import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #3d6b01;
  display: flex;
  justify-content: space-between;
  .PhonePlantPhoto {
    height: 100vh;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
 
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  a {
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  input {
    width: 462px;
    height: 78px;
    @media (max-width: 700px) {
      width: 100%;
      height: 45px;
    }
    border-radius: 10px;
    opacity: 0.7;
    background: #949a5e;
    border-style: none;
  }
`;

export const InputRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RadiosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.38rem;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BaseInput = styled.input`
  width: 462px;
  height: 78px;
  @media (max-width: 700px) {
    width: 100%;
    height: 45px;
  }
  border-radius: 10px;
  opacity: 0.7;
  background: #949a5e;
  border-style: none;
  color: #fff;
  font-size: 1.25rem;
  text-align: left;
  padding: 10px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;

export const StyledLabel = styled.label`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ErrorSpan = styled.span`
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubmitInput = styled(BaseInput)`
  cursor: pointer;
  color: #fff;
  text-align: center;
  &:hover {
    opacity: 1.5;
  }
`;
 