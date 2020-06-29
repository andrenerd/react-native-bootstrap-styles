import { mixinPaginationSizePageLink } from './mixins/pagination';
import { mixinBorderRadius, mixinBorderLeftRadius, mixinBorderRightRadius } from './mixins/border-radius';
// import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    FONT_SIZE_BASE_SM,
    FONT_SIZE_BASE_LG,
    LINE_HEIGHT_SM,
    LINE_HEIGHT_LG,
    BORDER_RADIUS_SM,
    BORDER_RADIUS_LG,
    LINK_DECORATION,
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
      // @include list-unstyled();
      mixinBorderRadius(constants),
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

      // RESEREVED
      // &:focus {
      //   z-index: 3;
      //   outline: $pagination-focus-outline;
      //   box-shadow: $pagination-focus-box-shadow;
      // }
    },

    // .page-item {
    //   &:first-child {
    //     .page-link {
    //       margin-left: 0;
    //       @include border-left-radius($border-radius);
    //     }
    //   }
    //   &:last-child {
    //     .page-link {
    //       @include border-right-radius($border-radius);
    //     }
    //   }

    //   &.active .page-link {
    //     z-index: 3;
    //     color: $pagination-active-color;
    //     background-color: $pagination-active-bg;
    //     border-color: $pagination-active-border-color;
    //   }

    //   &.disabled .page-link {
    //     color: $pagination-disabled-color;
    //     pointer-events: none;
    //     // Opinionated: remove the "hand" cursor set previously for .page-link
    //     cursor: auto;
    //     background-color: $pagination-disabled-bg;
    //     border-color: $pagination-disabled-border-color;
    //   }
    // }


    // //
    // // Sizing
    // //

    paginationLg: {
      // pass
      // see paginationLgPageLink, etc
    },

    paginationLgPageLink: mixinPaginationSizePageLink(PAGINATION_PADDING_Y_LG, PAGINATION_PADDING_X_LG, FONT_SIZE_BASE_LG, LINE_HEIGHT_LG),
    paginationLgPageItemFirstChildPageLink: n => selectorFirstChild(n, Object.assign({},
      mixinBorderLeftRadius(constants, BORDER_RADIUS_LG),
    )),
    paginationLgPageItemLastChildPageLink: n => selectorLastChild(n, Object.assign({},
      mixinBorderRightRadius(constants, BORDER_RADIUS_LG),
    )),

    paginationSm: {
      // pass
      // see paginationSmPageLink, etc
    },

    paginationSmPageLink: mixinPaginationSizePageLink(PAGINATION_PADDING_Y_SM, PAGINATION_PADDING_X_SM, FONT_SIZE_BASE_SM, LINE_HEIGHT_SM),
    paginationSmPageItemFirstChildPageLink: n => selectorFirstChild(n, Object.assign({},
      mixinBorderLeftRadius(constants, BORDER_RADIUS_SM),
    )),
    paginationSmPageItemLastChildPageLink: n => selectorLastChild(n, Object.assign({},
      mixinBorderRightRadius(constants, BORDER_RADIUS_SM),
    )),
  };

  return _classes;
};
