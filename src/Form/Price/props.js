import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const PriceFieldPropTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      sign: PropTypes.string,
    })
  ),
  inputProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({}),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const PriceFieldDefaultProps = {
  currencies: [
    {
      label: "EUR (€)",
      value: "eur",
      sign: "€",
    },
    {
      label: "USD ($)",
      value: "usd",
      sign: "$",
    },
    {
      label: "GBP (£)",
      value: "gbp",
      sign: "£",
    },
  ],
  inputProps: {
    placeholder: "Price",
  },
  name: "price",
  selectProps: {
    name: "currency",
  },
  startIcon: "money-bill",
};
