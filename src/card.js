import { mixinBorderRadius, mixinBorderTopRadius, mixinBorderBottomRadius, mixinBorderLeftRadius, mixinBorderRightRadius } from './mixins/border-radius';
import { selectorFirstChild, selectorNotFirstChild, selectorLastChild, selectorNotLastChild, selectorMediaUp, selectorMediaDown } from './mixins/selectors';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    SCREENS,
    SCREENS_INFIXES,
    ENABLE_ROUNDED,

    CARD_BG,
    CARD_CAP_BG,
    CARD_COLOR,
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

    cardListGroup: {
      borderTopWidth: CARD_BORDER_WIDTH,
      borderTopColor: CARD_BORDER_COLOR,
      borderBottomWidth: CARD_BORDER_WIDTH,
      borderBottomColor: CARD_BORDER_COLOR,
    },

    // obsoleted
    // cardListGroupFirstChild: (indexOrBool) => selectorFirstChild(indexOrBool, [{
    //   borderTopWidth: 0,
    // },
    //   mixinBorderTopRadius(constants, CARD_INNER_BORDER_RADIUS),
    // ]),

    // obsoleted
    // cardListGroupLastChild: (indexOrBool, length) => selectorFirstChild(indexOrBool, length, [{
    //   borderBottomWidth: 0,
    // },
    //   mixinBorderBottomRadius(constants, CARD_INNER_BORDER_RADIUS),
    // ]),

    cardBody: {
      flex: 1, // experimental / flex: 1 1 auto;
      paddingHorizontal: CARD_SPACER_X,
      paddingVertical: CARD_SPACER_X, // former: CARD_SPACER_Y,
      color: CARD_COLOR,
    },

    cardTitle: {
      marginBottom: CARD_SPACER_Y,
    },

    cardSubtitle: {
      marginTop: -(CARD_SPACER_Y / 2),
      marginBottom: 0,
    },

    // nb. seem useless: an issue is in the origin module
    cardTextLastChild: (indexOrBool, length) => selectorLastChild(indexOrBool, length, {
      marginBottom: 0,
    }),

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

    cardHeaderFirstChild: indexOrBool => selectorFirstChild(indexOrBool, Object.assign({},
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

    cardFooterLastChild: (indexOrBool, lengthOrNone) => selectorLastChild(indexOrBool, lengthOrNone, Object.assign({},
      mixinBorderRadius(constants, 0, 0, CARD_INNER_BORDER_RADIUS, CARD_INNER_BORDER_RADIUS),
    )),

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

    cardDeck: selectorMediaUp('Sm', SCREENS, {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: -CARD_DECK_MARGIN,
      marginLeft: -CARD_DECK_MARGIN,
    }),

    cardDeckCard: Object.assign({
      marginBottom: CARD_DECK_MARGIN,
    }, selectorMediaUp('Sm', SCREENS, {
        // flex: 1 0 0%;
        marginRight: CARD_DECK_MARGIN,
        marginBottom: 0,
        marginLeft: CARD_DECK_MARGIN,
    })),

    cardGroup: Object.assign({
      marginBottom: CARD_GROUP_MARGIN,
    }, selectorMediaUp('Sm', SCREENS, {
      flexDirection: 'row',
      flexWrap: 'wrap',
    })),

    // todo: bug with "hairline" space between grouped cards. "outside" borders
    cardGroupCard: (index, length) => Object.assign({},
      selectorMediaUp('Sm', SCREENS, Object.assign({
        // irrelevant? / flex: 1 0 0%;
        marginBottom: 0,
      }, ENABLE_ROUNDED ? Object.assign({},
          selectorNotFirstChild(index, {marginLeft: 0, borderLeftWidth: 0}), // from .card + .card
          selectorNotFirstChild(index, mixinBorderLeftRadius(constants, 0)),
          selectorNotLastChild(index, length, mixinBorderRightRadius(constants, 0)),
        ) : {},
      )),
      selectorMediaDown('Sm', SCREENS, Object.assign({
        // pass
      }, ENABLE_ROUNDED ? Object.assign({},
          selectorNotFirstChild(index, mixinBorderTopRadius(constants, 0)),
          selectorNotLastChild(index, length, mixinBorderBottomRadius(constants, 0)),
        ) : {},
      )),
    ),

    cardGroupCardCardImgTop: (index, length) => ENABLE_ROUNDED && Object.assign({},
      selectorMediaUp('Sm', SCREENS, Object.assign({},
        selectorNotLastChild(index, length, {borderTopRightRadius: 0}),
        selectorNotFirstChild(index, {borderTopLeftRadius: 0}),
      )),
      selectorMediaDown('Sm', SCREENS, Object.assign({},
        selectorNotFirstChild(index, mixinBorderTopRadius(constants, 0)),
      )),
    ),

    cardGroupCardCardHeader: (index, length) => ENABLE_ROUNDED && Object.assign({},
      selectorMediaUp('Sm', SCREENS, Object.assign({},
        selectorNotLastChild(index, length, {borderTopRightRadius: 0}),
        selectorNotFirstChild(index, {borderTopLeftRadius: 0}),
      )),
      selectorMediaDown('Sm', SCREENS, Object.assign({},
        selectorNotFirstChild(index, mixinBorderTopRadius(constants, 0)),
      )),
    ),
    cardGroupCardCardImgBottom: (index, length) => Object.assign({},
      selectorMediaUp('Sm', SCREENS, Object.assign({},
        selectorNotLastChild(index, length, {borderBottomRightRadius: 0}),
        selectorNotFirstChild(index, {borderBottomLeftRadius: 0}),
      )),
      selectorMediaDown('Sm', SCREENS, Object.assign({},
          selectorNotLastChild(index, length, mixinBorderBottomRadius(constants, 0)),
      )),
    ),

    cardGroupCardCardImgFooter: (index, length) => Object.assign({},
      selectorMediaUp('Sm', SCREENS, Object.assign({},
        selectorNotLastChild(index, length, {borderBottomRightRadius: 0}),
        selectorNotFirstChild(index, {borderBottomLeftRadius: 0}),
      )),
      selectorMediaDown('Sm', SCREENS, Object.assign({},
          selectorNotLastChild(index, length, mixinBorderBottomRadius(constants, 0)),
      )),
    ),

    // Columns

    cardColumnsCard: Object.assign({
      marginBottom: CARD_COLUMNS_MARGIN,
    }, selectorMediaUp('Sm', SCREENS, {
      // todo: set / display: inline-block; // Don't let them vertically span multiple columns
      width: '100%',
    })),

    cardColumns: selectorMediaUp('Sm', SCREENS, {
      // columnCount: $card-columns-count;
      // column-gap: $card-columns-gap;
      // orphans: 1;
      // widows: 1;
    }),

    // custom naming
    cardAccordionCard: (index, length) => Object.assign({
      overflow: 'hidden',
    },
      selectorNotLastChild(index, length, Object.assign({
        borderBottom: 0,
      },
        mixinBorderBottomRadius(constants, 0),
      )),
      selectorNotFirstChild(index,
        mixinBorderTopRadius(constants, 0),
      ),
    ),

    // custom naming
    cardAccordionCardHeader: {
      borderRadius: 0,
      marginBottom: -CARD_BORDER_WIDTH,
    },
  };

  return _classes;
};
