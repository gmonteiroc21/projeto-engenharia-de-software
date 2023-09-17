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
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  input {
    width: 462px;
    height: 78px;
    border-radius: 10px;
    //opacity: 0.7;
    background: #FFFFFF;
    //border-style: none;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BaseInput = styled.input`
  width: 462px;
  height: 78px;
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
  color: #3D6B01;
  &::placeholder {
    color: #3D6B01;
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

export const GreenBackground = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  background: #3d6b01;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding-top: 10rem;
  position: relative;
  z-index: 1;
`;

export const UploadInput = styled(BaseInput)`
  width: 28.875rem;
  height: 1.87044rem;
  cursor: pointer;
  background: #fff;
  color: #3D6B01;
  text-align: center;
  &:hover {
    opacity: 1.5;
  }
`;

export const SubmitInput = styled(BaseInput)`
  margin-top: 2rem;
  cursor: pointer;
  color: #3D6B01;
  text-align: center;
  &:hover {
    opacity: 1.5;
  }
  color: #3D6B01;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #fff;
`;
