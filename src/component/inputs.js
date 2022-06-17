import React, {useState} from "react";
import styled from "styled-components";
import Box from "./box";
import {ALL} from "./constants";

const Label = styled(Box).attrs({as: "label"})``;
const Input = styled(Box).attrs({as: "input"})``;

export const CheckBoxInput = ({id = "checkboxInput", label, onChange}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  return (
    <Box inline left cursor>
      <Input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={handleChange}
      />
      <label for={id}>{label}</label>
    </Box>
  );
};

export const RadioInputSet = ({setId = "radioInputSet", items, onChange}) => {
  const [selected, setSelected] = useState(ALL);

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Box column left gap onChange={handleChange}>
      {items.map(({value, label}, i) => (
        <Box left inline gap>
          <Input
            inline
            cursor
            {...{
              type: "radio",
              name: setId,
              id: value,
              value,
              checked: selected === value,
            }}
          />
          <Label cursor inline for={value}>
            <h4>{label}</h4>
          </Label>
        </Box>
      ))}
    </Box>
  );
};
