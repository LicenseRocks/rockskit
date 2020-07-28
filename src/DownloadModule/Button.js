import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "..";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  && {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const DownloadModuleButton = ({ icon }) => {
  return (
    <Wrapper>
      <Icon icon={icon} size="lg" />
    </Wrapper>
  );
};

DownloadModuleButton.propTypes = {
  icon: PropTypes.string.isRequired,
};
