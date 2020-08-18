import PropTypes from "prop-types";

export const SPACER_FORMULA = (factor) => factor * 4;

export const SPACER_POSTFIX = (space) => `${space > 0 ? "px" : ""}`;

export const SPACER_PROP_TYPES = {
  m: PropTypes.number,
  m0: PropTypes.bool,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  mAuto: PropTypes.bool,
  p: PropTypes.number,
  p0: PropTypes.bool,
  px: PropTypes.number,
  py: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number,
};

export const SPACER = ({
  m,
  m0,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
  mAuto,
  p,
  p0,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
}) => {
  let temp = "";

  if (m > -1) temp += `margin: ${SPACER_FORMULA(m)}px !important;`;
  if (m0) temp += `margin: 0 !important;`;
  if (mx > -1) temp += `margin: 0 ${SPACER_FORMULA(mx)}px !important;`;
  if (my > -1) temp += `margin: ${SPACER_FORMULA(my)}px 0 !important;`;
  if (mt > -1) temp += `margin-top: ${SPACER_FORMULA(mt)}px !important;`;
  if (mb > -1) temp += `margin-bottom: ${SPACER_FORMULA(mb)}px !important;`;
  if (mr > -1) temp += `margin-right: ${SPACER_FORMULA(mr)}px !important;`;
  if (ml > -1) temp += `margin-left: ${SPACER_FORMULA(ml)}px !important;`;
  if (mAuto) temp += `margin: auto !important;`;

  if (p > -1) temp += `padding: ${SPACER_FORMULA(p)}px !important;`;
  if (p0) temp += `padding: 0 !important;`;
  if (px > -1) temp += `padding: 0 ${SPACER_FORMULA(px)}px !important;`;
  if (py > -1) temp += `padding: ${SPACER_FORMULA(py)}px 0 !important;`;
  if (pt > -1) temp += `padding-top: ${SPACER_FORMULA(pt)}px !important;`;
  if (pb > -1) temp += `padding-bottom: ${SPACER_FORMULA(pb)}px !important;`;
  if (pr > -1) temp += `padding-right: ${SPACER_FORMULA(pr)}px !important;`;
  if (pl > -1) temp += `padding-left: ${SPACER_FORMULA(pl)}px !important;`;

  return temp;
};
