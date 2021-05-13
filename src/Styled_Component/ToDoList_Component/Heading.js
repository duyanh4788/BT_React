import styled from "styled-components";

export const Heading1 = styled.h1`
  margin: 10px 0;
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.2;
  color: ${(props) => {
    return props.theme.color;
  }};
`;

export const Heading2 = styled.h2`
  margin: 10px 0;
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.2;
  color: ${(props) => {
    return props.theme.color;
  }};
`;

export const Heading3 = styled.h3`
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  text-align: left;
  color: ${(props) => {
    return props.theme.color;
  }};
`;

export const Heading4 = styled.h4`
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: ${(props) => {
    return props.theme.color;
  }};
`;

export const Heading5 = styled.h5`
  margin: 10px 0;
  font-size: 0.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: ${(props) => {
    return props.theme.color;
  }};
`;
