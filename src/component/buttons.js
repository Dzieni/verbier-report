import * as React from "react";
import styled from "styled-components";
import Box from "./box";
import {navigate} from "gatsby";

export const Button = styled(Box).attrs({
  as: "button",
  inline: true,
  cursor: true,
})`
  box-shadow: 2px 2px 4px rgb(0 0 0 / 16%);
  border-radius: 3px;
  border: none;
`;

export const GreyButton = styled(Button)`
  transition: 0.5s;
  background-color: #676e7a;
  :hover {
    background-color: #6e6e6e;
  }
`;
export const BlueButton = styled(Button)`
  transition: 0.5s;
  background-color: #04adb5;
  :hover {
    background-color: #0accd3;
  }
`;

export const GoBackButton = () => {
  return (
    <GreyButton onClick={() => navigate("/")}>
      <h3 className="title white" style={{whiteSpace: "nowrap"}}>
        Retourner
      </h3>
    </GreyButton>
  );
};
