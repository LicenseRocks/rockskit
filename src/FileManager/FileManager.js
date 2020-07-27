import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { FileManagerPropTypes, FileManagerDefaultProps } from "./props";
import { DISPLAY, SPACER, Text, Thumbnail } from "..";

const Container = styled.div``;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Row = styled(Grid).attrs(() => ({
  container: true,
}))`
  width: 100%;
  height: 48px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Item = styled(Grid).attrs(({ lg }) => ({
  item: true,
  xs: 4,
  lg: lg || 3,
}))`
  display: flex;
  align-items: center;
`;

export const FileManager = ({ data }) => {
  return (
    <Container>
      {data.map(({ label, files }) => (
        <Wrapper key={label}>
          <Text content={label} fontWeight="bold" mb={2} />

          {files.map(({ date, description, id, name, previewUrl }) => (
            <Row key={id}>
              <Item lg={5} md={5}>
                <Thumbnail imgSrc={previewUrl} hasPreview mr={4} />
                <Text
                  content={name}
                  color="textSecondary"
                  fontStyle="italic"
                  noWrap
                />
              </Item>

              <Item lg={4} md={3}>
                <Text content={date} color="textSecondary" fontWeight="bold" />
              </Item>

              <Item justify="flex-end">
                <Text
                  content={description}
                  color="textSecondary"
                  fontWeight="bold"
                  noWrap
                />
              </Item>
            </Row>
          ))}
        </Wrapper>
      ))}
    </Container>
  );
};

FileManager.propTypes = FileManagerPropTypes;

FileManager.defaultProps = FileManagerDefaultProps;
