import React from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, Flex, Text, OutlineButton, SPACER, Image } from "..";
import { Icon } from "../Icon";
import { AlertPropTypes, AlertDefaultProps } from "./props";

const StyledMessage = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  padding: 8px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;
  ${({ rounded }) => rounded && "border-radius: 8px;"}
  background-color: ${({ colors }) => colors.backgroundColor};
  color: ${({ colors }) => colors.color};
  svg {
    color: ${({ colors }) => colors.iconColor};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: white !important;
  }
`;

const Avatar = styled.div`
margin-right:8px;
position: relative;
display: inline-block;

img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 20px;
  bord
}
  `;

const AcceptedStatus = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.palette.success.main};
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;

  svg {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 12px !important;
  }
`;

const getColors = (color, theme) => {
  switch (color) {
    case "danger":
      return {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.main,
        iconColor: theme.palette.error.main,
      };
    case "warning":
      return {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        iconColor: theme.palette.primary.main,
      };
    case "success":
      return {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.main,
        iconColor: theme.palette.success.main,
      };
    case "missingApproval":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.main,
        iconColor: theme.palette.warning.main,
      };
    case "approvedCollab":
      return {
        backgroundColor: theme.palette.success.main,
      };
    default:
      return {
        backgroundColor: theme.palette.gray.semiLight,
        color: theme.palette.text.primary,
        iconColor: theme.palette.primary.main,
      };
  }
};

export const Alert = ({ content, cocreator, children, color, ...props }) => {
  const theme = useTheme();
  const colors = getColors(color, theme);

  return (
    <StyledMessage colors={colors} {...props}>
      {content && <Icon icon="info-circle" mr={2} />}

      {content || children}
      {cocreator?.type === "missingApproval" && (
        <>
          <Icon icon="info-circle" mr={2} />
          <Flex>
            <Text fontSize="sm" fontWeight="bold">
              {cocreator?.title}
            </Text>
            <Text fontSize="sm">{cocreator?.description}</Text>
          </Flex>
        </>
      )}
      {cocreator?.type === "approvedCollab" && (
        <>
          <Avatar>
            <Image src={cocreator?.avatar} />
            <AcceptedStatus>
              <Icon icon="check" size="sm" />
            </AcceptedStatus>
          </Avatar>

          <AlertContainer>
            <Text fontSize="sm" fontWeight="bold">
              {cocreator?.title}, approved state {cocreator?.date}
            </Text>
            <OutlineButton
              color="secondary"
              size="sm"
              content={cocreator?.button}
              onClick={cocreator?.onClick}
            />
          </AlertContainer>
        </>
      )}
    </StyledMessage>
  );
};

Alert.propTypes = AlertPropTypes;

Alert.defaultProps = AlertDefaultProps;
