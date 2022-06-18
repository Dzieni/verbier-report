import React from "react";
import styled from "styled-components";
import Box from "../component/box";

const CardWrap = styled(Box)`
  background-color: white;

  box-shadow: 2px 2px 4px rgb(0 0 0 / 16%);
  border-radius: 9px;
`;

const Card = ({html}) => {
  return (
    <CardWrap
      column
      left
      padding="1rem"
      gap="0.5rem"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
};

const CatWrap = styled(Box)``;

const Category = ({label}) => {
  return (
    <CatWrap left padding="1rem 0 0">
      <h2 className="title darkGrey">{label.toUpperCase()}</h2>
    </CatWrap>
  );
};

const List = ({items, cats}) => {
  return (
    <Box column left>
      {cats.map((c) => {
        const catItems = items.filter((i) => i.category === c);
        if (!catItems.length) return null;

        return (
          <Box column gap>
            <Category {...{label: c}} />
            {catItems.map((i) => (
              <Card {...i} />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default List;
