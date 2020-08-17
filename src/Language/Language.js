import React, { useState } from "react";

import { Dropdown, TextButton } from "..";
import { LanguageDefaultProps, LanguagePropTypes } from "./props";

export const Language = ({ value, languages, onChange, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (val) => {
    onChange(val);
  };

  const current = languages.find((l) => l.value === value);

  return (
    <>
      <TextButton
        content={current?.label}
        color="secondary"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        {...props}
      />

      <Dropdown
        anchorEl={anchorEl}
        items={languages.map((l) => ({
          onClick: handleClick,
          selected: l.value === current?.value,
          ...l,
        }))}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      />
    </>
  );
};

Language.propTypes = LanguagePropTypes;

Language.defaultProps = LanguageDefaultProps;
