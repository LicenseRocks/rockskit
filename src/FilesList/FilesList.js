import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DISPLAY, SPACER } from "../theme";
import { FilesListBaseItem } from "./BaseItem";
import { FilesListDefaultProps, FilesListPropTypes } from "./props";
import { Fieldset } from "../Form";

const FilesListBase = ({ files, LinkComponent, ...props }) => {
  return (
    <Fieldset>
        <FilesListBaseItem files={files} LinkComponent={LinkComponent} {...props} />
    </Fieldset>
  );
};

FilesListBase.propTypes = {
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

const StyledFilesListBase = styled(FilesListBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const FilesList = (props) => {
  return <StyledFilesListBase {...props} />
};

FilesList.propTypes = FilesListPropTypes;

FilesList.defaultProps = FilesListDefaultProps;