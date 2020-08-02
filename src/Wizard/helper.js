export const stepBorderAndTitleColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.gray.dark;
  return theme.palette.gray.medium;
};

export const stepFlagColor = ({ isActive, isPassed, theme }) => {
  if (isActive || isPassed) return theme.palette.common.white;
  return theme.palette.gray.medium;
};

export const stepFlagBackgroundColor = ({ isActive, isPassed, theme }) => {
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.gray.dark;
  return theme.palette.gray.regular;
};
