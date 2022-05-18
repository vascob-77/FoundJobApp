import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.purpleLight};
  padding: 50px 0;
  gap:20px;
  h2{
    font-size: 1.3em;
    font-weight: 500;
  }
`;

export const SearchJob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    display: flex;
    justify-content: center;
    align-content: center;
    gap:8px;
  }


  input {
    height: 3rem;
    width: 250px;
    appearance: none;
    outline: none;
    border:none;
    padding: 2px 20px;
    opacity: .8;
    border-radius: 4px;

    &::placeholder{
      display: grid;
      font-family: Poppins;
      letter-spacing: .5px;
      font-size: 15px;
      color:gray;
    }
  }

  div{
    display: flex;
    align-items: center;
    height: 3rem;
    appearance: none;
    outline: none;
    border-color:gray;
    padding: 2px 10px;
    background-color: white;
    opacity: .8;
    border-radius: 4px;
    gap:4px;
  }
`;

export const FutureJob = styled.div`

`

export const Location = styled.div``
