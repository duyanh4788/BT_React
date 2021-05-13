import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 30px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 1s;
    background-color: white;
    color: green;
  }
`;
export const ButtonTai = styled(Button)`
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  font-size: 30px;
`;
export const ButtonXiu = styled(ButtonTai)`
  background-color: black;
`;
