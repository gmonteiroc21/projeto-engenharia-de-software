import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 8.5rem;
  background: #3d6b01;
  padding: 2.3rem 3.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  @media (max-width: 700px) {
    height: 4.25rem;
    justify-content: center;
    align-items: center;
    img:not(.buttonNav) {
      width: 120px;
      height: 50px;
    }
    .buttonNav {
      position: absolute;
      left: 2rem;
    }
  }
  .buttonNav {
    @media (min-width: 700px) {
      display: none !important;
    }
  }
`;

export const Navigation = styled.nav`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 700px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.19rem;
    list-style: none;
    a {
      &.isActive {
        border-bottom: 0.125rem solid #fff;
      }
    }
  }
`;

export const UserContainer = styled.div`
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  .UserPhoto {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 4.375rem;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
