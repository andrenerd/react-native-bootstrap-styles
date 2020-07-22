export default function getClasses(constants, classes) {
  const {
    BODY_BG,
    BODY_COLOR,
    FONT_FAMILY_BASE,
    FONT_WEIGHT_BASE,
    FONT_SIZE_BASE,
    LINE_HEIGHT_BASE,
    LINK_COLOR,
    LINK_DECORATION,
  } = constants;

  const _classes = {
    text: {
      fontFamily: FONT_FAMILY_BASE,
      fontSize: FONT_SIZE_BASE,
      fontWeight: FONT_WEIGHT_BASE,
      lineHeight: LINE_HEIGHT_BASE,
      color: BODY_COLOR,
    },

    linkText: Object.assign({}, classes.text, {
      color: LINK_COLOR,
      textDecorationLine: LINK_DECORATION,

      // @include hover() {
      //   color: $link-hover-color;
      //   text-decoration: $link-hover-decoration;
      // }
    }),

    image: {
      resizeMode: 'contain',
    },

    body: {
      flex: 1, // experimental
      backgroundColor: BODY_BG,
    },

    hidden: {
      display: 'none',
    },
  };

  // aliases
  _classes.link = _classes.linkText;
  _classes.a = _classes.linkText;

  return _classes;
};
