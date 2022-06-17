import React from "react";
import styled from "styled-components";
import Box from "./box";
import {ALL} from "./constants";
import {RadioInputSet} from "./inputs";

const SideBar = ({cats, onCatChange}) => {
  const items = [ALL, ...cats].map((c) => ({
    value: c,
    id: c,
    label: c,
  }));
  return (
    <Box column left gap>
      <h2 className="title darkGrey ">Axes et filtres</h2>
      <h4 className="darkGrey">Axes</h4>
      <RadioInputSet
        {...{
          items,
          onChange: onCatChange,
        }}
      />
    </Box>
  );
};

export default SideBar;
