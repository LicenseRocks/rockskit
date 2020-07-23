import React from "react";
import styled from "styled-components";
import MuiTabs from "@material-ui/core/Tabs";
import MuiTab from "@material-ui/core/Tab";

import { TabPropTypes } from "./props";

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const StyledTabs = styled(MuiTabs)`
  && {
    min-height: fit-content;

    .MuiTab-root {
      min-height: 24px;
    }
  }

  .MuiTabs-indicator {
    display: none;
  }

  button {
    min-width: fit-content;
    margin-right: ${({ theme }) => theme.spacing(5)};
    padding: 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;

    &.Mui-selected {
      font-weight: 600;
    }
  }

  .Mui-selected {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-radius: 2px 2px 0 0;
    }
  }
`;

const StyledTab = styled(MuiTab)`
  && {
    text-transform: initial;
  }
`;

export const Tab = ({ tabs, currentTab, onChange, ...props }) => {
  return (
    <>
      <Wrapper {...props}>
        <StyledTabs
          value={currentTab}
          onChange={(e, newTab) => onChange(newTab)}
          indicatorColor="primary"
          variant="scrollable"
        >
          {tabs
            .filter((t) => (typeof t.showTab === "boolean" ? t.showTab : true))
            .map((t) => (
              <StyledTab
                disabled={t.disabled}
                value={t.index}
                disableRipple
                label={t.label}
                key={t.index}
              />
            ))}
        </StyledTabs>
      </Wrapper>
    </>
  );
};

Tab.propTypes = TabPropTypes;
