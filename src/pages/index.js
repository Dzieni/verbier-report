import * as React from "react";
import {navigate} from "gatsby";
import {ContentBox, PageFrame} from "../component";
import Box from "../component/box";
import img from "../images/circle.png";
import styled from "styled-components";
import Button from "../component/button";

const NavButton = styled(Button)`
  width: 10rem;
  height: 2rem;

  transition: 0.5s;
  background-color: #676e7a;
  :hover {
    background-color: #6e6e6e;
  }
`;

export const Buttons = ({label}) => {
  return (
    <Box gap>
      <NavButton type="button" onClick={() => navigate("/ecosysteme")}>
        <h3 className="title white">Ecosystème </h3>
      </NavButton>
      <NavButton type="button" onClick={() => navigate("/brochure")}>
        <h3 className="title white">Rapport du projet </h3>
      </NavButton>
    </Box>
  );
};

const Image = styled(Box)`
  height: 25rem;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const Body = ({data}) => {
  return (
    <Box padding="2rem 0">
      <ContentBox top column gap="3rem">
        <Box column gap>
          <h1 className="title bold darkGrey">
            Projet de développement économique
          </h1>
          <h2 className="title darkGrey">Commune de Val de Bagnes</h2>
        </Box>
        <Image />
        <Buttons />
      </ContentBox>
    </Box>
  );
};

const IndexPage = (p) => <PageFrame {...{Body, ...p}} />;

export default IndexPage;
