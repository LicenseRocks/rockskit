import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";

import { Button, H3, Icon, TextButton } from "..";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    flex: 1;
    position: relative;
    background-color: ${({ theme }) => theme.palette.common.white};

    border-radius: 16px !important;
  }
`;

const ContentWrapper = styled(DialogContent).attrs(() => ({
  dividers: true,
}))`
  && {
    display: flex;
    flex-direction: column;
    padding: ${({ padding, theme }) => (padding ? theme.spacing(4) : 0)};
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
  size: "lg",
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
  cancelButton,
  dataCy,
  fullScreen,
  isOpen,
  loading,
  onClose,
  children,
  maxWidth,
  title,
  disabled,
  padding,
  ...props
}) => {
  return (
    <StyledDialog
      data-cy={dataCy}
      fullScreen={
        typeof fullScreen !== "undefined"
          ? fullScreen
          : typeof window !== "undefined" && window.screen.width < 768
      }
      onClose={onClose}
      open={isOpen}
      maxWidth={maxWidth}
      {...props}
    >
      {loading && (
        <LoadingWrapper>
          <CircularProgress size={60} />
        </LoadingWrapper>
      )}

      {title && (
        <Title>
          <H3 content={title} />

          <CloseModalIcon icon="times" onClick={onClose} />
        </Title>
      )}

      <ContentWrapper padding={padding}>{children}</ContentWrapper>

      {action && (
        <Actions hasDesc={!!actionDescription}>
          {cancelButton && (
            <TextButton
              onClick={onClose}
              color="secondary"
              content={"Cancel"}
            />
          )}
          <div>{actionDescription}</div>
          <Button disabled={disabled} loading={actionLoading} onClick={action}>
            {actionTitle}
          </Button>
        </Actions>
      )}
    </StyledDialog>
  );
};

Modal.propTypes = {
  action: PropTypes.func,
  actionDescription: PropTypes.node,
  actionLoading: PropTypes.bool,
  actionTitle: PropTypes.string,
  cancelButton: PropTypes.bool,
  dataCy: PropTypes.string,
  fullScreen: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  padding: PropTypes.bool,
};

Modal.defaultProps = {
  action: undefined,
  actionDescription: null,
  actionLoading: false,
  actionTitle: "Save",
  cancelButton: false,
  dataCy: "modal",
  fullScreen: undefined,
  loading: false,
  maxWidth: "md",
  title: "",
  disabled: false,
  padding: false,
};
