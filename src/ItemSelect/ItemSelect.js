import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { ItemSelectPropTypes, ItemSelectDefaultProps } from "./props";
import { ItemsPreview } from "./components/itemsPreview";
import { SelectItemsModal } from "./components/modal";
import axios from "axios";

export const ItemSelect = ({
  async,
  cacheOptions,
  register,
  control,
  setValue,
  options,
  maxWidth,
  endpoint,
  endpointQueryFlag,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [endpointOptions, setEndpointOptions] = useState([]);

  useEffect(() => {
    if (endpoint) {
      loadOptionsfromEndpoint();
    }
  }, [endpoint]);

  const loadOptionsfromEndpoint = () => {
    axios
      .get(`${endpoint}`)
      .then((resp) => {
        setEndpointOptions(resp?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        options={endpoint ? endpointOptions : options}
      />
    </>
  );
};

ItemSelect.propTypes = ItemSelectPropTypes;

ItemSelect.defaultProps = ItemSelectDefaultProps;
