// import React, { Fragment } from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color};
  width: 55%;  
  min-height: 37px;
  height: 37px;
  font-size: 17px;
  display: initial;
  outline: none;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.color};
  width: auto;
  text-align: left;
`;

export const TextField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <br />
      <Input  id='inputTaskList' {...props} />
    </span>
  );
};
