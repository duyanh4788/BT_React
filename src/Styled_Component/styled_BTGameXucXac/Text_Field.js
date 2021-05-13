import styled from "styled-components";

export const InputText = styled.input`
  color: ${(props) => (props.inputColor || "red")};
`;
