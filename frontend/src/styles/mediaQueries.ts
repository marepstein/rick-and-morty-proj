const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1036),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(375),
};
