import { mixinPaginationSizePageLink } from './mixins/pagination';
import { mixinBorderRadius, mixinBorderLeftRadius, mixinBorderRightRadius } from './mixins/border-radius';
import { selectorFirstChild, selectorLastChild, selectorCondition } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    FONT_SIZE_SM,
    FONT_SIZE_LG,
    LINE_HEIGHT_SM,
    LINE_HEIGHT_LG,
    BORDER_RADIUS_SM,
    BORDER_RADIUS_LG,
    PAGINATION_PADDING_Y, PAGINATION_PADDING_X,
    PAGINATION_PADDING_Y_SM, PAGINATION_PADDING_X_SM,
    PAGINATION_PADDING_Y_LG, PAGINATION_PADDING_X_LG,
    PAGINATION_LINE_HEIGHT,
    PAGINATION_COLOR, PAGINATION_BG,
    PAGINATION_BORDER_WIDTH, PAGINATION_BORDER_COLOR,
    PAGINATION_FOCUS_BOX_SHADOW, PAGINATION_FOCUS_OUTLINE,
    PAGINATION_ACTIVE_COLOR,
    PAGINATION_ACTIVE_BG,
    PAGINATION_ACTIVE_BORDER_COLOR,
    PAGINATION_DISABLED_COLOR,
    PAGINATION_DISABLED_BG,
    PAGINATION_DISABLED_BORDER_COLOR,
  } = constants;

  const _classes = {
    pagination: Object.assign({
      flexDirection: 'row', // TODO: to constant?
    },
      mixinBorderRadius(constants),
      // SKIPPED / @include list-unstyled();
    ),

    pageLink: {
      position: 'relative',
      paddingVertical: PAGINATION_PADDING_Y,
      paddingHorizontal: PAGINATION_PADDING_X,
      marginLeft: -PAGINATION_BORDER_WIDTH,
      lineHeight: PAGINATION_LINE_HEIGHT,
      color: PAGINATION_COLOR,
      textDecorationLine: 'none', // RFP: any ideas? / if($link-decoration == none, null, none),
      backgroundColor: PAGINATION_BG,
      borderWidth: PAGINATION_BORDER_WIDTH,
      borderColor: PAGINATION_BORDER_COLOR,
      borderStyle: 'solid',

      // SKIPPED
      // &:hover {
      //   z-index: 2;
      //   color: $pagination-hover-color;
      //   text-decoration: none;
      //   background-color: $pagination-hover-bg;
      //   border-color: $pagination-hover-border-color;
      // }

      // RESERVED
      // &:focus {
      //   z-index: 3;
      //   outline: $pagination-focus-outline;
      //   box-shadow: $pagination-focus-box-shadow;
      // }
    },

    pageItemFirstChildPageLink: nOrBool => selectorFirstChild(nOrBool, Object.assign({
      marginLeft: 0,
    },
      mixinBorderLeftRadius(constants, BORDER_RADIUS),
    )),

    pageItemLastChildPageLink: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, Object.assign({},
      mixinBorderRightRadius(constants, BORDER_RADIUS),
    )),

    pageItemActivePageLink: e => selectorCondition(e, {
      zIndex: 3,
      color: PAGINATION_ACTIVE_COLOR,
      backgroundColor: PAGINATION_ACTIVE_BG,
      borderColor: PAGINATION_ACTIVE_BORDER_COLOR,
    }),

    pageItemDisabledPageLink: e => selectorCondition(e, {
      color: PAGINATION_DISABLED_COLOR,
      backgroundColor: PAGINATION_DISABLED_BG,
      borderColor: PAGINATION_DISABLED_BORDER_COLOR,
    }),

    // //
    // // Sizing
    // //

    paginationLg: {
      // see paginationLgPageLink, etc
    },

    paginationLgPageLink: mixinPaginationSizePageLink(PAGINATION_PADDING_Y_LG, PAGINATION_PADDING_X_LG, FONT_SIZE_LG, LINE_HEIGHT_LG),
    paginationLgPageItemFirstChildPageLink: nOrBool => selectorFirstChild(nOrBool, Object.assign({},
      mixinBorderLeftRadius(constants, BORDER_RADIUS_LG),
    )),
    paginationLgPageItemLastChildPageLink: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, Object.assign({},
      mixinBorderRightRadius(constants, BORDER_RADIUS_LG),
    )),

    paginationSm: {
      // see paginationSmPageLink, etc
    },

    paginationSmPageLink: mixinPaginationSizePageLink(PAGINATION_PADDING_Y_SM, PAGINATION_PADDING_X_SM, FONT_SIZE_SM, LINE_HEIGHT_SM),
    paginationSmPageItemFirstChildPageLink: nOrBool => selectorFirstChild(nOrBool, Object.assign({},
      mixinBorderLeftRadius(constants, BORDER_RADIUS_SM),
    )),
    paginationSmPageItemLastChildPageLink: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, Object.assign({},
      mixinBorderRightRadius(constants, BORDER_RADIUS_SM),
    )),
  };

  return _classes;
};
