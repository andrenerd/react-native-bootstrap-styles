export default function getClasses(constants, classes) {
  const {
    SHADOW, SHADOW_SM, SHADOW_LG,
    SHADOW_COLOR, SHADOW_OPACITY, SHADOW_OFFSET, SHADOW_RADIUS,
    SHADOW_COLOR_SM, SHADOW_OPACITY_SM, SHADOW_OFFSET_SM, SHADOW_RADIUS_SM,
    SHADOW_COLOR_LG, SHADOW_OPACITY_LG, SHADOW_OFFSET_LG, SHADOW_RADIUS_LG,
  } = constants;

  const _classes = {
    shadow: Object.assign({}, SHADOW, { // for android
      shadowColor: SHADOW_COLOR,
      shadowOffset: SHADOW_OFFSET,
      shadowOpacity: SHADOW_OPACITY,
      shadowRadius: SHADOW_RADIUS,
    }),

    shadowSm: Object.assign({}, SHADOW_SM, { // for android
      shadowColor: SHADOW_COLOR_SM,
      shadowOffset: SHADOW_OFFSET_SM,
      shadowOpacity: SHADOW_OPACITY_SM,
      shadowRadius: SHADOW_RADIUS_SM,
    }),

    shadowLg: Object.assign({}, SHADOW_LG, { // for android
      shadowColor: SHADOW_COLOR_LG,
      shadowOffset: SHADOW_OFFSET_LG,
      shadowOpacity: SHADOW_OPACITY_LG,
      shadowRadius: SHADOW_RADIUS_LG,
    }),

    shadowNone: Object.assign({}, {elevation: 0}, { // for android
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
    }),
  };

  return _classes;
};
