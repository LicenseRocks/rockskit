import React from 'react';
import styled from "styled-components";

import { Fieldset } from "../Form";
import PropTypes from "prop-types";
import { DISPLAY, SPACER } from "../theme";
import { ListBaseItem } from "./BaseItem";

const ListBase = ({ options, ...props }) => {
  return (
    <Fieldset>
      {options.map((opt) => (
        <ListBaseItem key={opt.value} {...opt} {...props} />
      ))}
    </Fieldset>
  );
};

ListBase.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

const StyledListBase = styled(ListBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const List = (props) => {
  return <StyledListBase {...props} />;
}