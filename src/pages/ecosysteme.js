import React, {useState} from "react";
import styled from "styled-components";
import {ContentBox, HideIfMobile, PageFrame, ShowIfMobile} from "../component";
import Box from "../component/box";

import {graphql} from "gatsby";
import img from "../images/headerBg.png";
import SideBar from "../component/sidebar";
import {ALL} from "../component/constants";
import List from "../component/list";
import {GoBackButton, BlueButton} from "../component/buttons";

const Body = ({data}) => {
  const items = data.allMarkdownRemark.nodes.map((n) => ({
    ...n.frontmatter,
    html: n.html,
  }));

  const cats = [...new Set(items.map((i) => i.category))].sort();
  const [selectedCat, setSelectedCat] = useState();

  return (
    <Box padding="2rem 0">
      <ContentBox top>
        <HideIfMobile flex={1}>
          <SideBar {...{cats, onCatChange: setSelectedCat}} />
        </HideIfMobile>
        <Box flex={2}>
          <List
            {...{
              selectedCat,
              items:
                !selectedCat || selectedCat === ALL
                  ? items
                  : items.filter((i) => i.category === selectedCat),
              cats,
            }}
          />
        </Box>
      </ContentBox>
    </Box>
  );
};

const FiltersButton = styled(BlueButton)`
  padding: "0.5rem 1.5rem";
`;

const HeaderWrap = styled(Box)`
  height: 15rem;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const ContentBoxWrap = styled(ContentBox)`
  color: white;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <ContentBoxWrap column left gap="1rem">
        <Box column left gap="0.2rem">
          <h5 className=" white">Commune de val de Bagnes</h5>
          <h1 className="title bold white">
            Projet de développement économique - Ecosystème Économique
          </h1>
        </Box>
        <Box gap left top inline>
          <GoBackButton />
          <ShowIfMobile left>
            <FiltersButton>
              <h3 className="title white">Defis et filtres</h3>
            </FiltersButton>
          </ShowIfMobile>
        </Box>
      </ContentBoxWrap>
    </HeaderWrap>
  );
};

const ecosysteme = (p) => <PageFrame {...{Body, Header, ...p}} />;

export default ecosysteme;

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          category
          title
        }
      }
    }
  }
`;
