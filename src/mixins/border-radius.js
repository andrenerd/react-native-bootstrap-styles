import { getDefined } from './helpers';

// TODO: think to drop "constants" as param for all the mixins

export const mixinBorderRadius = (
  constants,
  allOrTopLeftRadius,
  topRightRadius,
  bottomRightRadius,
  bottomLeftRadius,
) => (constants.ENABLE_ROUNDED ? (
  arguments.length <= 2 ? {
    borderRadius: 1, // getDefined(allOrTopLeftRadius, constants.BORDER_RADIUS),
  } : {
    borderTopLeftRadius: getDefined(allOrTopLeftRadius, constants.BORDER_RADIUS),
    borderTopRightRadius: getDefined(topRightRadius, constants.BORDER_RADIUS),
    borderBottomRightRadius: getDefined(bottomRightRadius, constants.BORDER_RADIUS),
    borderBottomLeftRadius: getDefined(bottomLeftRadius, constants.BORDER_RADIUS),
  }
) : {});

export const mixinBorderTopRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderTopLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
    borderTopRightRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderBottomRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderBottomLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
    borderBottomRightRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderLeftRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderTopLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
    borderBottomLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderRightRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderTopRightRadius: getDefined(radius, constants.BORDER_RADIUS),
    borderBottomRightRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderTopLeftRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderTopLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderTopRightRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderTopRightRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderBottomLeftRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderBottomLeftRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});

export const mixinBorderBottomRightRadius = (
  constants,
  radius,
) => (constants.ENABLE_ROUNDED ? {
    borderBottomRightRadius: getDefined(radius, constants.BORDER_RADIUS),
} : {});
