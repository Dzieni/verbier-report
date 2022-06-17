import React from "react";
import styled from "styled-components";
import Box from "../component/box";

const Iframe = styled.iframe`
  border: 1px solid lightgray;
  width: 100%;
  height: 100vh;
`;

const brochure = () => {
  return (
    <Iframe
      allowfullscreen=""
      scrolling="no"
      className="fp-iframe"
      src="https://heyzine.com/flip-book/e41c0dd259.html"
    />
  );
};

export default brochure;
