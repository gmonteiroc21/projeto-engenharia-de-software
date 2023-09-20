import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #949a5e;
  position: relative;
`;

export const StyledTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 700px) {
    width: 100%;
  }

  input {
    width: 462px;
    height: 78px;
    @media (max-width: 700px) {
      width: 100%;
      height: 45px;
    }
    border-radius: 10px;
    //opacity: 0.7;
    background: #ffffff;
    //border-style: none;
  }
`;

export const BaseInput = styled.input`
  width: 462px;
  height: 78px;

  @media (max-width: 700px) {
    width: 100%;
    height: 45px;
  }

  border-radius: 10px;
  opacity: 0.8;
  background: #949a5e;
  border-style: none;
  color: #fff;
  font-size: 1.25rem;
  text-align: left;
  padding: 10px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  color: #3d6b01;
  &::placeholder {
    color: #3d6b01;
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
  padding-top: 2.8rem;
  @media (max-width: 700px) {
    width: 90%;
  }
  margin: auto;
`;

export const SubmitInput = styled(BaseInput)`
  margin-top: 2rem;
  cursor: pointer;
  color: #3d6b01;
  text-align: center;
  &:hover {
    opacity: 1.5;
  }
  color: #3d6b01;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #fff;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;
