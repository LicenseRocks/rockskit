import React, { useState } from "react";
import styled from "styled-components";
import { DISPLAY, OutlineButton, SPACER, Divider, Tooltip } from "..";
import { Text } from "../Typography";
import { Icon } from "../Icon";

import { DetailsTablePropTypes, DetailsTableDefaultProps } from "./props";

const Wrapper = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  ${({ justifyBetween }) => justifyBetween && "justify-content: space-between;"}
  min-height: ${({ size }) => (size === "md" ? "32px" : "16px")};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    ${({ columnSm }) => columnSm && "flex-direction: column;"}
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const LabelWrapper = styled.div`
  flex: 0 0 ${({ labelWidth }) => labelWidth}px;
  max-width: ${({ labelWidth }) => labelWidth}px;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

const Label = styled(Text).attrs(() => ({
  color: "textSecondary",
}))`
  && {
    text-transform: ${({ textTransform }) => textTransform};
  }
`;

const Hint = styled.div`
  background: ${({ theme }) => theme.palette.gray.semiLight};
  margin-left: ${({ theme }) => theme.spacing(2)};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.palette.gray.medium};
    font-size: 10px;
  }
`;

export const DetailsTable = ({
  expandButtonTitle,
  expandButtonProps,
  labelTextTransform,
  labelFontSize,
  labelWidth,
  labelWidthSm,
  justifyBetween,
  rows,
  size,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);
  const showExpandButton = rows?.some((row) => row.expandable);

  const renderRow = ({
    columnSm,
    divider,
    dividerSize = 6,
    icon,
    iconProps,
    label,
    labelHint,
    labelHintIcon = "question",
    labelHintContent,
    renderLabel = () => {},
    value,
  }) => (
    <>
      <Row
        columnSm={columnSm}
        key={`${label}:${value}`}
        justifyBetween={justifyBetween}
        size={size}
      >
        <LabelWrapper labelWidth={labelWidth}>
          {renderLabel() || (
            <>
              {icon && (
                <Icon icon={icon} mr={2} colorGrayRegular {...iconProps} />
              )}

              <Label
                textTransform={labelTextTransform}
                content={label}
                fontSize={labelFontSize}
              />

              {labelHint && (
                <Tooltip content={labelHintContent}>
                  <Hint>
                    <Icon icon={labelHintIcon} />
                  </Hint>
                </Tooltip>
              )}
            </>
          )}
        </LabelWrapper>

        {value || "-"}
      </Row>
      {divider && <Divider py={dividerSize} />}
    </>
  );

  return (
    <Wrapper {...props}>
      {rows.filter((row) => !row.expandable).map((row) => renderRow(row))}
      {showExpandButton && (
        <>
          <OutlineButton
            color="secondary"
            endIcon={expanded ? "chevron-up" : "chevron-down"}
            onClick={() => setExpanded((prev) => !prev)}
            size="xs"
            mb={4}
            {...expandButtonProps}
          >
            {expandButtonTitle}
          </OutlineButton>
          {expanded &&
            rows.filter((row) => row.expandable).map((row) => renderRow(row))}
        </>
      )}
    </Wrapper>
  );
};

DetailsTable.propTypes = DetailsTablePropTypes;

DetailsTable.defaultProps = DetailsTableDefaultProps;
