import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Dropdown, TextButton } from "../../..";

export const UserMenu = ({ menuItems, onClick, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <TextButton
        block
        content="John Seller"
        color="subtle"
        endIcon="chevron-down"
        startIcon="user-circle"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        {...props}
      />

      <Dropdown
        anchorEl={anchorEl}
        items={menuItems.map((l) => ({
          onClick: () => onClick(l.value),
          ...l,
        }))}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      />
    </>
  );
};

UserMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape),
};

UserMenu.defaultProps = {
  menuItems: [{ value: "/dashboard/profile", label: "Profile" }],
};
