import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { ItemSelectPropTypes, ItemSelectDefaultProps } from "./props";
import { ItemsPreview } from "./components/itemsPreview";
import { SelectItemsModal } from "./components/modal";

export const ItemSelect = ({
  register,
  control,
  setValue,
  options,
  maxWidth,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setValue(
      `selectedItems`,
      selectedItems?.map((item) => item?.id)
    );
  }, [selectedItems]);

  const removeSelectedItem = (id) => {
    setSelectedItems(selectedItems?.filter((item) => item.id !== id));
  };
  return (
    <>
      <Controller
        as={
          <ItemsPreview
            action={() => setOpenModal(true)}
            items={selectedItems}
            onRemove={removeSelectedItem}
            maxWidth={maxWidth}
          />
        }
        register={register}
        control={control}
        name="selectedItems"
      />
      <SelectItemsModal
        action={() => setOpenModal(true)}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        handleSelectItems={(props) => setSelectedItems(props)}
        selectedItems={selectedItems}
        options={options}
      />
    </>
  );
};

ItemSelect.propTypes = ItemSelectPropTypes;

ItemSelect.defaultProps = ItemSelectDefaultProps;
