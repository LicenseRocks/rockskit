import React from "react";
import { useController } from "react-hook-form";

import styled from "styled-components";
import Check from "../../assets/icons/check.svg";

const SingleCheckboxStyle = styled.div`
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    font: inherit;
    width: 24px;
    height: 24px;
    border: 1px solid #dad9dd;
    border-radius: 8px;
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.common.white};
    border: 1px solid ${({ theme }) => theme.palette.gray.regular};
    transition: background-color 0.1s ease-in-out;
  }

  input[type="checkbox"]:checked::before {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-image: url("${`${Check}`}");
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SingleCheckbox = ({ id, name, control }) => {
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name,
    control,
  });

  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <SingleCheckboxStyle>
      <input
        id={id}
        type="checkbox"
        onChange={handleChange}
        name={name}
        ref={ref}
        {...inputProps}
      />
    </SingleCheckboxStyle>
  );
};
