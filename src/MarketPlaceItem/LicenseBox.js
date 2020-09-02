import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Image } from "..";
import LicenseBoxImg from "../assets/images/license-box.svg";

const LicenseBoxWrapper = styled.div`
  margin-top: -${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  position: relative;
  background-image: url("${`${LicenseBoxImg}`}");
  background-size: 90px 108px;
  background-repeat: no-repeat;
  width: 90px;
  height: 108px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 24px;
  margin-left: ${({ theme }) => theme.spacing(6)};
`;

export const LicenseBox = ({ iconName, iconPrefix, iconColor, ...props }) => {
  return (
    <LicenseBoxWrapper {...props}>
      <StyledIcon color={iconColor} icon={iconName} prefix={iconPrefix} />
    </LicenseBoxWrapper>
  );
};

LicenseBox.propTypes = {
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  iconColor: PropTypes.string,
};

LicenseBox.defaultProps = {
  iconName: "th-large",
  iconPrefix: "fas",
  iconColor: "primary",
};
