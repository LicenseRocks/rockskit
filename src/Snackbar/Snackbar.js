import React, { forwardRef } from "react";
import { useSnackbar, SnackbarContent } from "notistack";
import styled from "styled-components";

import { convertHexToRGBA, Flex, Text } from "..";
import { Icon } from "../Icon";
import { SnackbarDefaultProps, SnackbarPropTypes } from "./props";

const StyledSnackbarContent = styled(SnackbarContent)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 25%;
    max-width: fit-content;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme, variant }) => theme.palette[variant].light};
  color: ${({ theme, variant }) => theme.palette[variant].main};
  padding: ${({ theme }) => theme.spacing(4)};
`;

const CloseIcon = styled(Icon).attrs(() => ({
  icon: "times",
  size: "sm",
}))`
  position: absolute;
  top: ${({ theme }) => theme.spacing(3)};
  right: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme, variant }) => theme.palette[variant].main};
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme, variant }) => theme.palette[variant].main};
`;

const mapVariantToColor = (variant) => {
  switch (variant) {
    case "default":
    case "info":
      return "primary";
    default:
      return variant;
  }
};

const mapVariantToIcon = (variant) => {
  switch (variant) {
    case "success":
      return "check-circle";
    default:
      return "info-circle";
  }
};

export const Snackbar = forwardRef((props, ref) => {
  const { closeSnackbar } = useSnackbar();
  const variant = mapVariantToColor(props.variant);
  const icon = mapVariantToIcon(props.variant);

  const handleDismiss = () => {
    closeSnackbar(props.id);
  };

  return (
    <StyledSnackbarContent ref={ref}>
      <Wrapper variant={variant}>
        <CloseIcon onClick={handleDismiss} variant={variant} />

        <Flex container alignItems="center">
          <Flex item xs={2}>
            <IconWrapper variant={variant}>
              <StyledIcon icon={icon} variant={variant} />
            </IconWrapper>
          </Flex>

          <Flex item xs={10}>
            <Text content={props.message} fontWeight="bold" />
          </Flex>
        </Flex>
      </Wrapper>
    </StyledSnackbarContent>
  );
});

Snackbar.propTypes = SnackbarPropTypes;

Snackbar.defaultProps = SnackbarDefaultProps;
