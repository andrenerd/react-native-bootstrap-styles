import { mixinBorderRadius, mixinBorderTopRadius, mixinBorderBottomRadius } from './mixins/border-radius';

export default function getClasses(constants, classes) {
  const {
    TOAST_MAX_WIDTH,
    TOAST_PADDING_X,
    TOAST_PADDING_Y,
    TOAST_FONT_SIZE,
    TOAST_COLOR,
    TOAST_BACKGROUND_COLOR,
    TOAST_BORDER_WIDTH,
    TOAST_BORDER_COLOR,
    TOAST_BORDER_RADIUS,
    TOAST_BOX_SHADOW_COLOR,
    TOAST_BOX_SHADOW_OPACITY,
    TOAST_BOX_SHADOW_OFFSET,
    TOAST_BOX_SHADOW_RADIUS,
    TOAST_HEADER_COLOR,
    TOAST_HEADER_BACKGROUND_COLOR,
    TOAST_HEADER_BORDER_COLOR,
  } = constants;

  const _classes = {

    toast: Object.assign({
      maxWidth: TOAST_MAX_WIDTH,
      overflow: 'hidden', // cheap rounded corners on nested items
      color: TOAST_COLOR,
      backgroundColor: TOAST_BACKGROUND_COLOR,
      borderWidth: TOAST_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: TOAST_BORDER_COLOR,
      // shadowColor: TOAST_BOX_SHADOW_COLOR,
      // shadowOffset: TOAST_BOX_SHADOW_OFFSET,
      // shadowOpacity: TOAST_BOX_SHADOW_OPACITY,
      // shadowRadius: TOAST_BOX_SHADOW_RADIUS,
      opacity: 0, // origin: 0
      // not supported / backdrop-filter: blur(10px); // check: BlurView, react-native-blur
      // not supported /  backgroundClip: padding-box,
    },
      mixinBorderRadius(constants, TOAST_BORDER_RADIUS),
      // @include font-size($toast-font-size);
    ),

    toastNotLastChild: (nOrBool, length) => selectorLastChild(nOrBool, length, {
      marginBottom: TOAST_PADDING_X,
    }),

    toastHeader: Object.assign({
      alignItems: 'center',
      paddingVertical: TOAST_PADDING_Y,
      paddingHorizontal: TOAST_PADDING_X,
      backgroundColor: TOAST_HEADER_BACKGROUND_COLOR,
      borderWidth: TOAST_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: TOAST_HEADER_BORDER_COLOR,
      // not supported / background-clip: padding-box;
    },
      mixinBorderTopRadius(constants, TOAST_BORDER_RADIUS),
    ),

    toastHeaderText: {
      color: TOAST_HEADER_COLOR,
    },

    toastBody: {
      padding: TOAST_PADDING_X, // apply to both vertical and horizontal
    },

    toastShowing: {
      opacity: 1,
    },

    toastShow: {
      opacity: 1,
    },

    toastHide: {
      display: 'none',
    },
  };

  return _classes;
};
