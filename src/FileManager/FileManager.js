import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { FileManagerPropTypes, FileManagerDefaultProps } from "./props";
import { Text } from "../Typography";

const Container = styled.div``;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
`;

const Label = styled(Text).attrs(() => ({
  fontWeight: "bold",
}))`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Row = styled(Grid).attrs(() => ({
  container: true,
}))`
  width: 100%;
  height: 48px;
`;

const Item = styled(Grid).attrs(() => ({
  item: true,
  xs: 4,
}))`
  display: flex;
  align-items: center;
`;

export const FileManager = ({ data }) => {
  return (
    <Container>
      {data.map(({ label, files }) => (
        <Wrapper key={label}>
          <Label content={label} />

          {files.map(({ date, description, id, name }) => (
            <Row key={id}>
              <Item>
                <Text
                  content={name}
                  color="textSecondary"
                  fontStyle="italic"
                  noWrap
                />
              </Item>

              <Item justify="center">
                <Text content={date} color="textSecondary" fontWeight="bold" />
              </Item>

              <Item justify="flex-end">
                <Text
                  content={description}
                  color="textSecondary"
                  fontWeight="bold"
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
