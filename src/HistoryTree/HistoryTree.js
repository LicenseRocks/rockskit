import React from "react";
import styled from "styled-components";

import { Text } from "..";
import { DISPLAY, SPACER } from "../theme";
import { HistoryTreeDefaultProps, HistoryTreePropTypes } from "./props";

const NODE_SIZE = 20;
const NODE_CONNECTOR_HEIGHT = 28;
const ROW_HEIGHT = NODE_SIZE + 2 * NODE_CONNECTOR_HEIGHT;

const Wrapper = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Label = styled.div`
  position: absolute;
  bottom: ${NODE_SIZE + 8}px;
  left: -50%;
  opacity: 0;
  text-align: center;
  transition: all 0.2s ease-in-out;
`;

const Node = styled.div`
  position: relative;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : theme.palette.gray.regular};
  width: ${NODE_SIZE}px;
  height: ${NODE_SIZE}px;
  border-radius: 12px;
  margin-right: ${({ theme }) => theme.spacing(10)};

  ::after {
    content: none;
    width: ${NODE_SIZE * 2 + 2}px;
    height: ${NODE_CONNECTOR_HEIGHT}px;
    position: absolute;
    left: ${NODE_SIZE / 2 - 1}px;
    top: ${NODE_SIZE}px;
    border-left: 2px dashed #cecdd9;
    border-bottom: 2px dashed #cecdd9;
    border-bottom-left-radius: 48px;
  }
`;

const NodeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ::before,
  ::after {
    content: "";
    height: ${NODE_CONNECTOR_HEIGHT}px;
    width: ${NODE_CONNECTOR_HEIGHT}px;
    position: absolute;
    left: ${NODE_SIZE / 2 - 1}px;
    border-left: 2px dashed ${({ theme }) => theme.palette.gray.regular};
  }

  ::before {
    top: -${NODE_CONNECTOR_HEIGHT}px;
  }

  ::after {
    content: "";
    top: ${NODE_SIZE}px;
  }

  :last-child {
    ::before {
      width: ${NODE_CONNECTOR_HEIGHT}px;
      border-right: 2px dashed ${({ theme }) => theme.palette.gray.regular};
      border-top: 2px dashed ${({ theme }) => theme.palette.gray.regular};
      border-left: none;
      top: -${NODE_CONNECTOR_HEIGHT + 2}px;
      left: -${NODE_CONNECTOR_HEIGHT / 2 + 2}px;
      border-top-right-radius: 48px;
    }
  }

  :first-child {
    ${Node} {
      ::after {
        content: "";
      }
    }
  }

  :hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${Node} {
      background-color: ${({ theme }) => theme.palette.gray.medium};
    }
    ${Label} {
      opacity: 1;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: ${ROW_HEIGHT}px;

  :last-child {
    ${NodeWrapper}, ${Node} {
      ::after {
        content: none;
      }
    }
  }
`;

const Nodes = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  max-width: 80px;
  width: 80px;
`;

export const HistoryTree = ({ activeNodeId, data, onNodeClick, ...props }) => {
  return (
    <Wrapper {...props}>
      {data.map((row) => (
        <Row key={row.key}>
          <Description>
            <Text
              content={row.description}
              color="textSecondary"
              fontSize="sm"
              noWrap
              pr={1}
            />
          </Description>

          <Nodes>
            {row.nodes?.map((node) => {
              const isActive = activeNodeId === node.id;

              return (
                <NodeWrapper
                  key={node.id}
                  onClick={(e) => onNodeClick(e, node)}
                >
                  <Label>
                    <Text
                      content={node.label}
                      color="textSecondary"
                      fontSize="sm"
                      fontWeight="bold"
                    />
                  </Label>

                  <Node active={isActive} />
                </NodeWrapper>
              );
            })}
          </Nodes>
        </Row>
      ))}
    </Wrapper>
  );
};

HistoryTree.propTypes = HistoryTreePropTypes;

HistoryTree.defaultProps = HistoryTreeDefaultProps;
