import React from "react";
import styled from "styled-components";

import { DISPLAY, Flex, H4, SPACER } from "../../../..";
import {
  CreatorsHubFooterPropTypes,
  CreatorsHubFooterDefaultProps,
} from "./props";

const Footer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(16, 0)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(8, 0)};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const BottomSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing(16)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

const Col = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ColItem = styled.li`
  font-size: 12px;
  line-height: 120%;
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const renderCol = ({ title, items }) => (
  <>
    <H4 content={title} mb={4} />

    <Col>
      {items?.map((item) => (
        <ColItem key={item.key}>{item.render()}</ColItem>
      ))}
    </Col>
  </>
);

export const CreatorsHubFooter = ({
  bottomContent,
  content,
  navCols,
  ...props
}) => {
  return (
    <>
      <Footer {...props}>
        <Flex container alignItems="flex-start" spacing={8}>
          {content && (
            <Flex item xs={12} md={6} lg={3}>
              {content}
            </Flex>
          )}

          {navCols?.map((col) => (
            <Flex item xs={12} md={6} lg={3} key={col.title}>
              {renderCol(col)}
            </Flex>
          ))}
        </Flex>

        {bottomContent && <BottomSection>{bottomContent}</BottomSection>}
      </Footer>
    </>
  );
};

CreatorsHubFooter.propTypes = CreatorsHubFooterPropTypes;

CreatorsHubFooter.defaultProps = CreatorsHubFooterDefaultProps;
