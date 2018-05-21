import Color from 'color';

import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    MODAL_INNER_PADDING,
    MODAL_BACKDROP_BG,
    MODAL_BACKDROP_OPACITY,
    MODAL_DIALOG_MARGIN,
    MODAL_CONTENT_BG,
    MODAL_CONTENT_BORDER_WIDTH,
    MODAL_CONTENT_BORDER_COLOR,
    MODAL_CONTENT_BORDER_RADIUS,
    MODAL_CONTENT_SHADOW_COLOR,
    MODAL_CONTENT_SHADOW_OFFSET,
    MODAL_CONTENT_SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_RADIUS,
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

    modalClose: {
      position: 'absolute',
      right: MODAL_INNER_PADDING / 2, // temporal
      top: 0, // MODAL_INNER_PADDING / 4, // temporal
      zIndex: 1, // temporal
      // padding: $modal-header-padding;
      // margin: (-$modal-header-padding) (-$modal-header-padding) (-$modal-header-padding) auto;
    },

    modalHeader: {
      // display: flex;
      // align-items: flex-start; // so the close btn always stays on the upper right corner
      // justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends
      // padding: $modal-header-padding;
      // border-bottom: $modal-header-border-width solid $modal-header-border-color;
      // @include border-top-radius($modal-content-border-radius);
    },

    modalTitle: {
      // margin-bottom: 0;
      // line-height: $modal-title-line-height;
    },

    modalBody: {
      padding: MODAL_INNER_PADDING,
    },

    modalFooter: {
      // display: flex;
      // align-items: center; // vertically center
      // justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items
      // padding: $modal-inner-padding;
      // border-top: $modal-footer-border-width solid $modal-footer-border-color;

      // // Easily place margin between footer elements
      // > :not(:first-child) { margin-left: .25rem; }
      // > :not(:last-child) { margin-right: .25rem; }
    },
  };

  return _classes;
};
