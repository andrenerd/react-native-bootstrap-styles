export default function getClasses(constants, classes) {
  const {
    WHITE,
    THEME_COLORS,
    BORDER_COLOR,
    BORDER_WIDTH,
    BORDER_RADIUS,
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

    borderRounded: {
      borderRadius: BORDER_RADIUS,
    },

    // .rounded {
    //   border-radius: $border-radius !important;
    // }
    // .rounded-top {
    //   border-top-left-radius: $border-radius !important;
    //   border-top-right-radius: $border-radius !important;
    // }
    // .rounded-right {
    //   border-top-right-radius: $border-radius !important;
    //   border-bottom-right-radius: $border-radius !important;
    // }
    // .rounded-bottom {
    //   border-bottom-right-radius: $border-radius !important;
    //   border-bottom-left-radius: $border-radius !important;
    // }
    // .rounded-left {
    //   border-top-left-radius: $border-radius !important;
    //   border-bottom-left-radius: $border-radius !important;
    // }

    // .rounded-circle {
    //   border-radius: 50% !important;
    // }

    // .rounded-0 {
    //   border-radius: 0 !important;
    // }
  };

  // border%color / ex: bgPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    _classes['border' + classColor] = {borderColor: THEME_COLORS[item]};
  });

  return _classes;
};
