import React from "react";
import styled from "styled-components";
import Box from "./box";

export const ContentBox = styled(Box)`
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;

  padding: 0 1rem;
`;

const PageWrap = styled(Box)`
  min-height: 100vh;
  background-color: #f2f4f8;
`;

export const PageFrame = ({Body, Header, ...p}) => {
  return (
    <PageWrap column left top>
      {Header && <Header {...p} />}
      {Body && <Body {...p} />}
    </PageWrap>
  );
};

export const HideIfMobile = styled(Box)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const ShowIfMobile = styled(Box)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
