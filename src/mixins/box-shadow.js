export const mixinBoxShadow = (
  constants,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
) => (constants.ENABLE_SHADOWS ? {
  shadowColor: shadowColor,
  shadowOffset: shadowOffset,
  shadowOpacity: shadowOpacity,
  shadowRadius: shadowRadius,
  elevation: 1,
} : {});