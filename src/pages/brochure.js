import React from "react";
import styled from "styled-components";
import Box from "../component/box";
import {GoBackButton} from "../component/buttons";

const Iframe = styled.iframe`
  border: 1px solid lightgray;
  width: 100%;
  height: 90vh;
`;

const brochure = () => {
  return (
    <Box gap="0.5rem" column left padding="0.5rem">
      <GoBackButton />
      <Iframe
        allowfullscreen=""
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/e41c0dd259.html"
      />
    </Box>
  );
};

export default brochure;
