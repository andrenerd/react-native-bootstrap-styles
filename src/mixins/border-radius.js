export const mixinBorderRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
  borderRadius: radius === undefined ? constants.BORDER_RADIUS : radius,
} : {});