export default function getClasses(constants, classes) {
  const {
    WHITE,
    THEME_COLORS,
    BORDER_COLOR,
    BORDER_WIDTH,
    BORDER_RADIUS,
    BORDER_RADIUS_SM,
    BORDER_RADIUS_LG,
    ROUNDED_PILL,
  } = constants;

  const _classes = {
    // experimental
    border: {
      borderColor: BORDER_COLOR,
      borderWidth: BORDER_WIDTH,
      borderStyle: 'solid',
    },

    borderTop: {
      borderColor: BORDER_COLOR,
      borderTopWidth: BORDER_WIDTH,
      borderStyle: 'solid',
    },

    borderRight: {
      borderColor: BORDER_COLOR,
      borderRightWidth: BORDER_WIDTH,
      borderStyle: 'solid',
    },

    borderBottom: {
      borderColor: BORDER_COLOR,
      borderBottomWidth: BORDER_WIDTH,
      borderStyle: 'solid',
    },

    borderLeft: {
      borderColor: BORDER_COLOR,
      borderLeftWidth: BORDER_WIDTH,
      borderStyle: 'solid',
    },

    border0: {borderWidth: 0},
    borderTop0: {borderTopWidth: 0},
    borderRight0: {borderRightWidth: 0},
    borderBottom0: {borderBottomWidth: 0},
    borderLeft0: {borderLeftWidth: 0},

    borderWhite: {borderColor: WHITE},

    // DEPRECATED
    borderRounded: {
      borderRadius: BORDER_RADIUS,
    },

    roundedSm: {
      borderRadius: BORDER_RADIUS_SM,
    },

    rounded: {
      borderRadius: BORDER_RADIUS,
    },

    roundedTop: {
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
    },

    roundedRight: {
      borderTopRightRadius: BORDER_RADIUS,
      borderBottomRightRadius: BORDER_RADIUS,
    },

    roundedBottom: {
      borderBottomRightRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
    },

    roundedLeft: {
      borderTopLeftRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
    },

    roundedLg: {
      borderRadius: BORDER_RADIUS_LG,
    },

    // workaround / number, not percentage, accepted only
    roundedCircle: widthHeight => widthHeight / 2,

    roundedPill: {
      borderRadius: ROUNDED_PILL,
    },

    rounded0: {
      borderRadius: 0,
    },
  };

  // border%color / ex: borderPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    _classes['border' + classColor] = {borderColor: THEME_COLORS[item]};
  });

  return _classes;
};
