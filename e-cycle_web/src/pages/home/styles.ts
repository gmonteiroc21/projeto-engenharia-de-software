import styled from "styled-components";

export const Content = styled.div`
  background: #949a5e;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding-top: 0;
  }
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding-top: 5.35rem;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 43rem;
  width: 50%;
  .HandImage {
    margin-bottom: 2rem;
    width: 100%;
    @media (max-width: 700px) {
      display: none;
    }
  }
  position: relative;
  z-index: 1;
  @media (max-width: 700px) {
    order: 2;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    width: 100%;
    height: 5.125rem;
    border-radius: 0.3125rem;
    background: #778d45;
    border-style: none;
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #949a5e;
    }
    @media (max-width: 700px) {
      margin: 30px;
      font-size: 1.3rem;
    }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  @media (max-width: 700px) {
    width: 80%;
  }
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

export const GreenBackground = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  background: #3d6b01;
`;
