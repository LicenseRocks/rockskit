import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import styled from "styled-components";

import { Button, Icon } from "..";

const ContentWrapper = styled(DialogContent).attrs(() => ({
  dividers: true,
}))`
  && {
    padding: 0;
    &:first-child {
      padding-top: 0;
    }
  }
`;

const Title = styled(DialogTitle).attrs(() => ({
  disableTypography: true,
}))`
  && {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.darkIndigo};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(3, 5)}px;
  }
`;

const CloseModalIcon = styled(Icon).attrs(() => ({
  iconSize: "lg",
}))`
  cursor: pointer;
  background-color: white;
  && {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

const Actions = styled(DialogActions)`
  && {
    justify-content: ${({ hasDesc }) =>
      hasDesc ? "space-between" : "flex-end"};
  }
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  z-index: 1;
`;

export const Modal = ({
  action,
  actionDescription,
  actionLoading,
  actionTitle,
  dataCy,
  fullScreen,
  isOpen,
  loading,
  onClose,
  children,
  maxWidth,
  title,
  disabled,
  ...props
}) => {
  return (
    <Dialog
      data-cy={dataCy}
      fullScreen={
        typeof fullScreen !== "undefined"
          ? fullScreen
          : typeof window !== "undefined" && window.screen.width < 768
      }
      onClose={onClose}
      open={isOpen}
      maxWidth={maxWidth}
      PaperProps={{
        style: {
          position: "relative",
        },
      }}
      {...props}
    >
      {loading && (
        <LoadingWrapper>
          <CircularProgress size={60} />
        </LoadingWrapper>
      )}
      {title && (
        <Title>
          {title}
          <CloseModalIcon icon="times" onClick={onClose} />
        </Title>
      )}
      <ContentWrapper>{children}</ContentWrapper>
      {action && (
        <Actions hasDesc={!!actionDescription}>
          <div>{actionDescription}</div>
          <Button disabled={disabled} loading={actionLoading} onClick={action}>
            {actionTitle}
          </Button>
        </Actions>
      )}
    </Dialog>
  );
};

Modal.propTypes = {
  action: PropTypes.func,
  actionDescription: PropTypes.node,
  actionLoading: PropTypes.bool,
  actionTitle: PropTypes.string,
  dataCy: PropTypes.string,
  fullScreen: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

Modal.defaultProps = {
  action: undefined,
  actionDescription: null,
  actionLoading: false,
  actionTitle: "Save",
  dataCy: "modal",
  fullScreen: undefined,
  loading: false,
  maxWidth: "md",
  title: "",
  disabled: false,
};
