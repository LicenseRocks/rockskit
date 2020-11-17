import React from "react";
import styled, { css } from "styled-components";

import { FileManagerPropTypes, FileManagerDefaultProps } from "./props";
import { DISPLAY, Image, SPACER, Text, Thumbnail } from "..";
import { Flex } from "../Flex";
import fileIcon from "../assets/icons/file.svg";

const Container = styled.div``;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-color: ${({ theme }) => theme.palette.common.white};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 48px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const DetailsWrapper = styled.div`
  min-width: 0;
  flex: 1;
`;

const Item = styled(Flex).attrs(({ lg, md, xs }) => ({
  item: true,
  xs: xs || 12,
  md: md || 4,
  lg: lg || 4,
}))`
  display: flex;
  align-items: center;

  ${({ align, theme }) =>
    align &&
    css`
      ${theme.breakpoints.up("sm")} {
        justify-content: ${align};
      }
    `}
`;

export const FileManager = ({ data, noItemsText }) => {
  return (
    <Container>
      {data.map(({ label, files }) => (
        <Wrapper key={label}>
          <Text content={label} fontWeight="bold" mb={2} />

          {files.length > 0 ? (
            files.map(
              ({
                date,
                description,
                id,
                name,
                previewUrl,
                renderDate = () => {},
                renderDescription = () => {},
                renderName = () => {},
                renderPreview = () => {},
              }) => (
                <Row key={id}>
                  {renderPreview() || (
                    <Thumbnail imgSrc={previewUrl} hasPreview mr={4} />
                  )}

                  <DetailsWrapper>
                    <Flex container>
                      <Item>
                        {renderName() || (
                          <Text
                            content={name}
                            color="textSecondary"
                            fontSize="sm"
                            noWrap
                          />
                        )}
                      </Item>

                      <Item>
                        {renderDate() || (
                          <Text
                            content={date}
                            color="textSecondary"
                            fontWeight="bold"
                          />
                        )}
                      </Item>

                      <Item align="flex-end">
                        {renderDescription() || (
                          <Text
                            content={description}
                            color="textSecondary"
                            fontWeight="bold"
                            noWrap
                          />
                        )}
                      </Item>
                    </Flex>
                  </DetailsWrapper>
                </Row>
              )
            )
          ) : (
            <Item xs={12}>
              <Image src={fileIcon} mr={4} />

              <Text
                content={noItemsText}
                color="textSecondary"
                dInline
                fontSize="sm"
                noWrap
              />
            </Item>
          )}
        </Wrapper>
      ))}
    </Container>
  );
};

FileManager.propTypes = FileManagerPropTypes;

FileManager.defaultProps = FileManagerDefaultProps;
