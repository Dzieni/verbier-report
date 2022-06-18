import * as React from "react";
import {navigate} from "gatsby";
import {ContentBox, PageFrame} from "../component";
import Box from "../component/box";
import img from "../images/circle.png";
import styled from "styled-components";
import {GreyButton} from "../component/buttons";

const NavButton = styled(GreyButton)`
  width: 10rem;
  height: 2rem;
`;

export const Buttons = () => {
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
  height: 30rem;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;

  @media only screen and (max-width: 768px) {
    height: 20rem;
  }
`;

const Body = ({data}) => {
  return (
    <Box padding="2rem 0">
      <ContentBox top column gap="3rem">
        <Box column gap>
          <h1 style={{textAlign: "center"}} className="title bold darkGrey">
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
