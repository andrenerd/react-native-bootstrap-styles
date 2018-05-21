export default function getClasses(constants, classes) {
  const {
    BODY_BG,
    BODY_COLOR,
    FONT_FAMILY_BASE,
    FONT_WEIGHT_NORMAL,
    FONT_SIZE_BASE,
    LINK_COLOR,
    LINK_DECORATION,
  } = constants;

  const _classes = {
    text: {
      fontFamily: FONT_FAMILY_BASE,
      fontSize: FONT_SIZE_BASE,
      fontWeight: FONT_WEIGHT_NORMAL,
      // lineHeight: 1.5,
      color: BODY_COLOR,
    },

    // experimental
    link: {
      // pass
    },

    // experimental
    linkText: Object.assign({}, classes.text, {
      color: LINK_COLOR,
      textDecorationLine: LINK_DECORATION,
    }),

    image: {
      resizeMode: 'contain',
    },

    body: {
      backgroundColor: BODY_BG,
    },
  };

  return _classes;
};
