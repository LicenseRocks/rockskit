import React from "react";
import styled from "styled-components";

import { Button, COLOR, DISPLAY, Icon, SPACER, Text } from "..";
import { NoItemPropTypes, NoItemDefaultProps } from "./props";

const Wrapper = styled.div`
  text-align: center;

  ${(theme) => COLOR(theme)}
  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

const StyledIcon = styled(Icon).attrs(() => ({
  colorGrayRegular: true,
  icon: "sad-cry",
}))`
  font-size: 32px;
`;

export const NoItem = ({
  buttonAction,
  buttonHref,
  buttonText,
  dataCy,
  text,
  ...props
}) => {
  return (
    <Wrapper data-cy={dataCy} {...props}>
      <StyledIcon />
      <Text fontWeight="bold" my={2}>
        {text}
      </Text>
      {buttonText && (
        <Button
          color="subtle"
          href={buttonHref}
          onClick={buttonAction}
          size="xs"
        >
          {buttonText}
        </Button>
      )}
    </Wrapper>
  );
};

NoItem.propTypes = NoItemPropTypes;

NoItem.defaultProps = NoItemDefaultProps;
