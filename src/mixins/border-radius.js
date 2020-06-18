import { getDefined } from './functions';

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
