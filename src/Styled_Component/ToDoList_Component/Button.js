import styled from "styled-components";
//----------------button-------------------
export const Button = styled.button`
  margin-left: 3px;
  text-align: right;
  apperance: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.bordeButton};
  outline: none;
  padding: 0.25em 0.5em;
  transition: all 0.5s;
  font-size: 17px;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverBgColor};
    border: ${(props) => props.theme.bordeButton};
  }
  &:disabled {
    cursor: no-drop;
  }
`;
