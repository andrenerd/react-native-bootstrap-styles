import { mediaBreakpointUp, mediaBreakpointDown } from './mixins/helpers';
import { mixinBorderRadius, mixinBorderTopRadius, mixinBorderBottomRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';
import { selectorFirstChild, selectorNotFirstChild } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    SCREENS,
    SCREENS_INFIXES,

    CARD_BG,
    CARD_CAP_BG,
    CARD_SPACER_X,
    CARD_SPACER_Y,
    CARD_BORDER_WIDTH,
    CARD_BORDER_COLOR,
    CARD_BORDER_RADIUS,
    CARD_INNER_BORDER_RADIUS,
    // OBSOLETED / CARD_SHADOW_COLOR,
    // OBSOLETED / CARD_SHADOW_OFFSET,
    // OBSOLETED / CARD_SHADOW_OPACITY,
    // OBSOLETED / CARD_SHADOW_RADIUS,
    CARD_IMG_OVERLAY_PADDING,
    CARD_GROUP_MARGIN,
    CARD_DECK_MARGIN,
    CARD_COLUMNS_COUNT,
    CARD_COLUMNS_GAP,
    CARD_COLUMNS_MARGIN,
  } = constants;

  const _classes = {
    card: Object.assign({
      flex: 1, // experimental
      flexDirection: 'column',
      backgroundColor: CARD_BG,
      borderWidth: CARD_BORDER_WIDTH,
      borderColor: CARD_BORDER_COLOR,
    },
      mixinBorderRadius(constants, CARD_BORDER_RADIUS),
      // OBSOLETED / mixinBorderTopRadius(constants, CARD_BORDER_RADIUS),
      // OBSOLETED / mixinBorderBottomRadius(constants, CARD_BORDER_RADIUS),
      // OBSOLETED / mixinBoxShadow(constants, CARD_SHADOW_COLOR, CARD_SHADOW_OFFSET, CARD_SHADOW_OPACITY, CARD_SHADOW_RADIUS),
    ),

    cardBody: {
      flex: 1, // experimental
      paddingHorizontal: CARD_SPACER_X,
      paddingVertical: CARD_SPACER_Y,
    },

    cardTitle: {
      marginBottom: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
    },

    cardSubtitle: {
      marginTop: -(CARD_SPACER_Y / 2),
      marginBottom: 0,
    },

    // .card-text:last-child {
    //   marginBottom: 0;
    // }

    // .card-link {
    //   @include hover {
    //     text-decoration: none;
    //   }

    //   + .card-link {
    //     margin-left: CARD_SPACER_X;
    //   }
    // }

    cardHeader: {
      paddingVertical: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
      backgroundColor: CARD_CAP_BG,
      borderBottomWidth: CARD_BORDER_WIDTH,
      borderBottomColor: CARD_BORDER_COLOR,

      // see cardHeaderFirstChild
      // &:first-child {
      //   @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);
      // }

      // see cardHeaderListGroupItemFirstChild
      // + .list-group {
      //   .list-group-item:first-child {
      //     border-top: 0;
      //   }
      // }
    },

    cardHeaderFirstChild: nOrBool => selectorFirstChild(nOrBool, Object.assign({},
      mixinBorderRadius(constants, CARD_INNER_BORDER_RADIUS, CARD_INNER_BORDER_RADIUS, 0, 0),
    )),

    // TODO: check later (bools?)
    cardHeaderListGroupItemFirstChild: (nListGroup, nListGroupItem) => selectorNotFirstChild(nListGroup, (
      selectorFirstChild(nListGroupItem, {
        borderTop: 0,
      })
    )),

    cardFooter: {
      paddingVertical: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
      backgroundColor: CARD_CAP_BG,
      borderTopWidth: CARD_BORDER_WIDTH,
      borderTopColor: CARD_BORDER_COLOR,

      // see cardFooterLastChild
      // &:last-child {
      //   @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);
      // }
    },

    cardFooterLastChild: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, Object.assign({},
      mixinBorderRadius(constants, 0, 0, CARD_INNER_BORDER_RADIUS, CARD_INNER_BORDER_RADIUS),
    )),

    // //
    // // Header navs
    // //

    cardHeaderTabs: {
      marginRight: -CARD_SPACER_X / 2,
      marginBottom: -CARD_SPACER_Y,
      marginLeft: -CARD_SPACER_X / 2,
      borderBottomWidth: 0,
    },

    cardHeaderPills: {
      marginRight: -CARD_SPACER_X / 2,
      marginLeft: -CARD_SPACER_X / 2,
    },

    // Card image

    cardImgOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: CARD_IMG_OVERLAY_PADDING,
    },

    cardImg: Object.assign({
      flexShrink: 0, // TEST / flex-shrink: 0
      alignSelf: 'stretch', // TEST / width: 100%
    }, mixinBorderRadius(constants, CARD_INNER_BORDER_RADIUS)),

    cardImgTop: Object.assign({
      flexShrink: 0, // TEST / flex-shrink: 0
      alignSelf: 'stretch', // TEST / width: 100%
    }, mixinBorderTopRadius(constants, CARD_INNER_BORDER_RADIUS)),

    cardImgBottom: Object.assign({
      flexShrink: 0, // TEST / flex-shrink: 0
      alignSelf: 'stretch', // TEST / width: 100%
    }, mixinBorderBottomRadius(constants, CARD_INNER_BORDER_RADIUS)),

    // Card deck

    // see cardDeckCard,
    // .card-deck {
    //   .card {
    //     margin-bottom: $card-deck-margin;
    //   }

    //   @include media-breakpoint-up(sm) {
    //     display: flex;
    //     flex-flow: row wrap;
    //     margin-right: -$card-deck-margin;
    //     margin-left: -$card-deck-margin;

    //     .card {
    //       // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
    //       flex: 1 0 0%;
    //       margin-right: $card-deck-margin;
    //       margin-bottom: 0; // Override the default
    //       margin-left: $card-deck-margin;
    //     }
    //   }
    // }

    cardDeck: {
      // TODO: wrap it in selector: media-breakpoint-up(sm)
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: -CARD_DECK_MARGIN,
      marginLeft: -CARD_DECK_MARGIN,
    },

    cardDeckCard: Object.assign({
      marginBottom: CARD_DECK_MARGIN,
    }, mediaBreakpointUp('Sm', SCREENS, {
        // flex-flow: row wrap;
        marginRight: -CARD_DECK_MARGIN,
        marginLeft: -CARD_DECK_MARGIN,

        // TODO
        // .card {
        //   // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
        //   flex: 1 0 0%;
        //   margin-right: $card-deck-margin;
        //   margin-bottom: 0; // Override the default
        //   margin-left: $card-deck-margin;
        // }
    })),

    // //
    // // Card groups
    // //

    // .card-group {
    //   // The child selector allows nested `.card` within `.card-group`
    //   // to display properly.
    //   > .card {
    //     margin-bottom: $card-group-margin;
    //   }

    //   @include media-breakpoint-up(sm) {
    //     display: flex;
    //     flex-flow: row wrap;
    //     // The child selector allows nested `.card` within `.card-group`
    //     // to display properly.
    //     > .card {
    //       // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
    //       flex: 1 0 0%;
    //       margin-bottom: 0;

    //       + .card {
    //         margin-left: 0;
    //         border-left: 0;
    //       }

    //       // Handle rounded corners
    //       @if $enable-rounded {
    //         &:not(:last-child) {
    //           @include border-right-radius(0);

    //           .card-img-top,
    //           .card-header {
    //             // stylelint-disable-next-line property-blacklist
    //             border-top-right-radius: 0;
    //           }
    //           .card-img-bottom,
    //           .card-footer {
    //             // stylelint-disable-next-line property-blacklist
    //             border-bottom-right-radius: 0;
    //           }
    //         }

    //         &:not(:first-child) {
    //           @include border-left-radius(0);

    //           .card-img-top,
    //           .card-header {
    //             // stylelint-disable-next-line property-blacklist
    //             border-top-left-radius: 0;
    //           }
    //           .card-img-bottom,
    //           .card-footer {
    //             // stylelint-disable-next-line property-blacklist
    //             border-bottom-left-radius: 0;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }


    // //
    // // Columns
    // //

    // .card-columns {
    //   .card {
    //     margin-bottom: $card-columns-margin;
    //   }

    //   @include media-breakpoint-up(sm) {
    //     column-count: $card-columns-count;
    //     column-gap: $card-columns-gap;
    //     orphans: 1;
    //     widows: 1;

    //     .card {
    //       display: inline-block; // Don't let them vertically span multiple columns
    //       width: 100%; // Don't let their width change
    //     }
    //   }
    // }


    // //
    // // Accordion
    // //

    // .accordion {
    //   > .card {
    //     overflow: hidden;

    //     &:not(:last-of-type) {
    //       border-bottom: 0;
    //       @include border-bottom-radius(0);
    //     }

    //     &:not(:first-of-type) {
    //       @include border-top-radius(0);
    //     }

    //     > .card-header {
    //       @include border-radius(0);
    //       margin-bottom: -$card-border-width;
    //     }
    //   }
    // }

  };

  return _classes;
};
