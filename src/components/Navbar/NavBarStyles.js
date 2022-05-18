import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 9px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > p {
    background-image: linear-gradient(to right, ${props => props.theme.purple} 0%, #f9dd94 100%);
    background-repeat: repeat-x;
    background-position: 0 100%;
    background-size: 100% 3px;
    font-weight: 500;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
