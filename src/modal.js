import Color from 'color';

import { mixinBorderRadius, mixinBorderTopRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    MODAL_INNER_PADDING,
    MODAL_BACKDROP_BG,
    MODAL_BACKDROP_OPACITY,
    MODAL_DIALOG_MARGIN,
    MODAL_TITLE_LINE_HEIGHT,
    MODAL_CONTENT_BG,
    MODAL_CONTENT_BORDER_WIDTH,
    MODAL_CONTENT_BORDER_COLOR,
    MODAL_CONTENT_BORDER_RADIUS,
    MODAL_CONTENT_SHADOW_COLOR,
    MODAL_CONTENT_SHADOW_OFFSET,
    MODAL_CONTENT_SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_RADIUS,
    MODAL_HEADER_BORDER_COLOR,
    MODAL_FOOTER_BORDER_COLOR,
    MODAL_HEADER_BORDER_WIDTH,
    MODAL_FOOTER_BORDER_WIDTH,
    MODAL_HEADER_PADDING_X,
    MODAL_HEADER_PADDING_Y,
  } = constants;

  const _classes = {
    modal: {
      backgroundColor: Color(MODAL_BACKDROP_BG).fade(MODAL_BACKDROP_OPACITY).rgb().string(),
      flex: 1, // experimental
    },

    modalDialog: {
      margin: MODAL_DIALOG_MARGIN,
      marginTop: MODAL_DIALOG_MARGIN * 3, // custom
      flex: 1, // experimental
    },

    modalContent: Object.assign({
      backgroundColor: MODAL_CONTENT_BG,
      borderWidth: MODAL_CONTENT_BORDER_WIDTH,
      borderColor: MODAL_CONTENT_BORDER_COLOR,
      flex: 1, // experimental
    },
      mixinBorderRadius(constants, MODAL_CONTENT_BORDER_RADIUS),
      mixinBoxShadow(constants, MODAL_CONTENT_SHADOW_COLOR, MODAL_CONTENT_SHADOW_OFFSET, MODAL_CONTENT_SHADOW_OPACITY, MODAL_CONTENT_SHADOW_RADIUS),
    ),

    modalHeader: Object.assign({
      // display: flex,
      alignItems: 'flex-start', // so the close btn always stays on the upper right corner
      justifyContent: 'space-between', // Put modal header elements (title and dismiss) on opposite ends
      paddingVertical: MODAL_HEADER_PADDING_Y,
      paddingHorizontal: MODAL_HEADER_PADDING_X,
      borderBottomWidth: MODAL_HEADER_BORDER_WIDTH,
      borderBottomColor: MODAL_HEADER_BORDER_COLOR,
      borderStyle: 'solid',
    }, 
      mixinBorderTopRadius(constants, MODAL_CONTENT_BORDER_RADIUS),
    ),

    // experimental
    modalHeaderClose: {
      position: 'absolute',
      right: MODAL_HEADER_PADDING_X,
      top: MODAL_HEADER_PADDING_Y,
      zIndex: 1,
      // RESERVED / padding: $modal-header-padding;
      // RESERVED / margin: (-$modal-header-padding) (-$modal-header-padding) (-$modal-header-padding) auto;
    },

    modalTitle: {
      marginBottom: 0,
      lineHeight: MODAL_TITLE_LINE_HEIGHT,
    },

    modalBody: {
      padding: MODAL_INNER_PADDING,
    },

    modalFooter: {
      // display: flex,
      alignItems: 'center',
      justifyContent: 'flex-end', // Right align buttons with flex property because text-align doesn't work on flex items
      padding: MODAL_INNER_PADDING,
      borderTopWidth: MODAL_FOOTER_BORDER_WIDTH,
      borderTopColor: MODAL_FOOTER_BORDER_COLOR,
      borderStyle: 'solid',

      // Easily place margin between footer elements
      // > :not(:first-child) { margin-left: .25rem; }
      // > :not(:last-child) { margin-right: .25rem; }
    },
  };

  return _classes;
};
