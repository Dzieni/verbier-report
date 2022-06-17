import styled from "styled-components";

const START = "flex-start";
const END = "flex-end";
const MID = "center";
const topBot = (p) => (p.top ? START : p.bottom ? END : MID);
const leftRight = (p) => (p.left ? START : p.right ? END : MID);

const Box = styled.div`
  ${(p) => {
    const gap = p.gap === true ? "1rem" : p.gap;
    return {
      position: p.relative ? "relative" : p.absolute ? "absolute" : false,

      display: p.inline ? "inline-flex" : "flex",

      // Size
      padding: p.padding === true ? gap : p.padding,
      margin: p.wrap && gap ? `-calc(${gap}/2)` : p.margin,
      width: p.width || p.size || (!(p.fitChildren || p.inline) && `100%`),
      height: p.height || p.size,
      minWidth: p.minWidth,
      maxWidth: p.maxWidth,
      minHeight: p.minHeight,
      maxHeight: p.maxHeight,

      // Children layout
      flexWrap: p.wrap && "wrap",
      flexDirection: p.column
        ? "column"
        : p.columnReverse
        ? "column-reverse"
        : undefined,
      justifyContent: p.spaceBetween
        ? "space-between"
        : p.spaceAround
        ? "space-around"
        : p.spaceEvenly
        ? "space-evenly"
        : p.column
        ? topBot(p)
        : leftRight(p),
      alignItems: p.stretch ? "stretch" : p.column ? leftRight(p) : topBot(p),
      flex: p.flex,
      order: p.order && String(p.order),

      // Gap between children
      // For flex we use negative + positive margin
      "& > *:not(:last-child)": !p.wrap &&
        gap && {
          [`margin-${p.column ? "bottom" : "right"}`]: gap,
        },
      "& > *": p.wrap &&
        gap && {
          margin: `calc(${gap}/2)`,
        },
    };
  }};

  cursor: ${({cursor}) => cursor && "pointer"};

  /* border: solid black 1px; */
`;

export default Box;
