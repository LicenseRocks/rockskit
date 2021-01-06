export const formatPrice = (price = 0, locale = "de-DE", currency = "EUR") =>
  price.toLocaleString(locale, {
    style: "currency",
    currency,
  });

export const formatDateAndTime = (date, options, locale = "en-US") => {
  const defaultOptions = {
    showDate: true,
    showTime: true,
    ...options,
  };

  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const timeOptions = {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
  };

  return new Date(date).toLocaleString(locale, {
    ...(defaultOptions.showTime ? timeOptions : {}),
    ...(defaultOptions.showDate ? dateOptions : {}),
  });
};
