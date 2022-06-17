import styled from "styled-components";
import Box from "./box";

const Button = styled(Box).attrs({as: "button", inline: true, cursor: true})`
  box-shadow: 2px 2px 4px rgb(0 0 0 / 16%);
  border-radius: 3px;
  border: none;
`;

export default Button;
