import React from "react";
import "./src/styles/reset.css";
import "./src/styles/custom.css";
import "./src/styles/fonts.css";

export const wrapRootElement = ({element}) => {
  const ConnectedRootElement = <div>{element}</div>;
  return ConnectedRootElement;
};
