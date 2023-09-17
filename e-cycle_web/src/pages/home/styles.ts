import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #949a5e;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

export const StyledButton = styled.button`
  width: 19.8125rem;
  height: 5.125rem;
  border-radius: 0.3125rem;
  background: #778d45;
  border-style: none; 
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.5625rem;
  font-style: normal; 
  font-weight: 400;
  line-height: normal;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(5px);
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  }
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
 
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 2rem;
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
 