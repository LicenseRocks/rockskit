export const stepBorderAndTitleColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.gray.medium;
};

export const stepFlagColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.common.white;
  return theme.palette.gray.medium;
};

export const stepFlagBackgroundColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.common.white;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.common.white;
};

export const stepConnectorColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.gray.medium;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.gray.medium;
};
