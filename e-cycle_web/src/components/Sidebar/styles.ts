import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Container = styled.div<Props>`
  display: ${(props) => !props.isActive && "none !important"};
  min-height: 100vh;
  width: 10rem;
  background: #3d6b01;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  a {
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3 {
    position: absolute;
    bottom: 2rem;
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

export const UserContainer = styled.div`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  .UserPhoto {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 4.375rem;
  }
  z-index: 3;
  margin-bottom: 4.12rem;
`;

export const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
