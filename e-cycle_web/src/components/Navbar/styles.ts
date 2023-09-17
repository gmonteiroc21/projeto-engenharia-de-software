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
  z-index: 2; 
`; 

export const Navigation = styled.nav`
  color: #fff; 
  text-align: center;
  font-family: Nunito;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;

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
`;
