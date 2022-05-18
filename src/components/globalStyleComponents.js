import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.purple};
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
