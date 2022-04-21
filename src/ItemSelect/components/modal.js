import React, { useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Modal } from "../../Modal";
import { SelectItemCard } from "./card";

const StyledModal = styled(Modal)`
  .MuiDialog-paper {
    min-height: 640px !important;
  }
  .MuiDialogTitle-root {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
  .MuiDialogContent-root {
    border-top: none !important;
    background-color: ${({ theme }) => theme.palette.common.white} !important;
  }

  [class*="MuiPaper-root"] {
    background-color: ${({ theme }) => theme.palette.common.white} !important;
    border-radius: 16px !important;
  }
`;
const GridWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  padding: ${({ theme }) => theme.spacing(4, 6)};

  overflow-y: scroll;
  height: 530px;

  .nft-masonry-grid {
    display: flex;
    width: auto;

    &:first-child {
      margin-left: -${({ theme }) => theme.spacing(4)};
    }
  }

  .nft-masonry-grid_column {
    padding-left: ${({ theme }) => theme.spacing(2)}; /* gutter size */
    min-width: 180px !important;
  }

  /* Style your items */
  .nft-masonry-grid_column > a,
  .nft-masonry-grid_column > div {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SelectItemsModal = ({
  action,
  isOpen,
  onClose,
  handleSelectItems,
  selectedItems,
  options,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const isChecked = (option) => {
    let checkStatus = selectedItems?.some(
      (item) => Number(item.id) === option.id
    );
    return checkStatus;
  };

  return (
    <StyledModal
      cancelButton={true}
      action={onClose}
      actionTitle={`add`}
      title={`select Merch Items`}
      isOpen={isOpen}
      onClose={onClose}
      className="modal_select"
    >
      <GridWrapper>
        <Masonry
          breakpointCols={{
            default: 4,
            1265: 4,
            950: 3,
            650: 2,
            513: 1,
          }}
          className="nft-masonry-grid"
          columnClassName="nft-masonry-grid_column"
        >
          {options?.map((option) => {
            return (
              <SelectItemCard
                checked={isChecked(option)}
                onClick={() => {
                  if (!selectedItems?.some((item) => item.id === option.id)) {
                    handleSelectItems([
                      ...selectedItems,
                      {
                        id: option.id,
                        coverSrc: option.coverSrc,
                        title: option.title,
                      },
                    ]);
                  } else if (
                    selectedItems?.some((item) => item.id === option.id)
                  ) {
                    handleSelectItems(
                      selectedItems?.filter((item) => item.id !== option.id)
                    );
                  }
                }}
                key={option.id}
                id={option.id}
                title={option.title}
                coverSrc={option.coverSrc}
              />
            );
          })}
        </Masonry>
      </GridWrapper>
    </StyledModal>
  );
};
