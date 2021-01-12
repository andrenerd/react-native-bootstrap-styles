import { mixinBorderRadius, mixinBorderTopRadius, mixinBorderBottomRadius } from './mixins/border-radius';
import { mixinBorderTopRightRadius, mixinBorderBottomLeftRadius } from './mixins/border-radius';
import { selectorFirstChild, selectorLastChild, selectorNotFirstChild } from './mixins/selectors';
import { selectorMediaUp } from './mixins/selectors';
import { colorLevel } from './mixins/helpers';

export default function getClasses(constants, classes) {
  const {
    THEME_COLORS,
    LINK_DECORATION_LINE,
    LINK_DECORATION_COLOR,
    LINK_DECORATION_STYLE,
    GRID_BREAKPOINTS,
    SCREENS_INFIXES,
    SCREENS,
    LIST_GROUP_COLOR,
    LIST_GROUP_BG,
    LIST_GROUP_BORDER_COLOR,
    LIST_GROUP_BORDER_WIDTH,
    LIST_GROUP_BORDER_RADIUS,
    LIST_GROUP_ITEM_PADDING_Y,
    LIST_GROUP_ITEM_PADDING_X,
    LIST_GROUP_ACTIVE_COLOR,
    LIST_GROUP_ACTIVE_BG,
    LIST_GROUP_ACTIVE_BORDER_COLOR,
    LIST_GROUP_DISABLED_COLOR,
    LIST_GROUP_DISABLED_BG,
    LIST_GROUP_ACTION_COLOR,
    LIST_GROUP_ACTION_HOVER_COLOR,
    LIST_GROUP_ACTION_ACTIVE_COLOR,
    LIST_GROUP_ACTION_ACTIVE_BG,
  } = constants;

  const _classes = {

    listGroup: Object.assign({
      flexDirection: 'column',
      paddingLeft: 0, // useless
      marginBottom: 0,
    },
      mixinBorderRadius(LIST_GROUP_BORDER_RADIUS),
    ),

    // TODO: add later
    // // Interactive list items
    // //
    // // Use anchor or button elements instead of `li`s or `div`s to create interactive
    // // list items. Includes an extra `.active` modifier class for selected items.

    // .list-group-item-action {
    //   width: 100%; // For `<button>`s (anchors become 100% by default though)
    //   color: $list-group-action-color;
    //   text-align: inherit; // For `<button>`s (anchors inherit)

    //   // Hover state
    //   @include hover-focus() {
    //     z-index: 1; // Place hover/focus items above their siblings for proper border styling
    //     color: $list-group-action-hover-color;
    //     text-decoration: none;
    //     background-color: $list-group-hover-bg;
    //   }

    //   &:active {
    //     color: $list-group-action-active-color;
    //     background-color: $list-group-action-active-bg;
    //   }
    // }

    listGroupItem: {
      position: 'relative',
      paddingVertical: LIST_GROUP_ITEM_PADDING_Y,
      paddingHorizontal: LIST_GROUP_ITEM_PADDING_X,
      backgroundColor: LIST_GROUP_BG,
      borderBottomWidth: 0,
      borderWidth: LIST_GROUP_BORDER_WIDTH,
      borderColor: LIST_GROUP_BORDER_COLOR,
      borderStyle: 'solid',
    },

    // should it be a function?
    listGroupItemDisabled: {
      backgroundColor: LIST_GROUP_DISABLED_BG,
    },

    // should it be a function?
    listGroupItemActive: {
      zIndex: 2, // make sense?
      backgroundColor: LIST_GROUP_ACTIVE_BG,
      borderColor: LIST_GROUP_ACTIVE_BORDER_COLOR,
    },

    listGroupItemText: Object.assign({}, classes.text, {
      color: LIST_GROUP_COLOR,
      textDecorationLine: LINK_DECORATION_LINE,
      textDecorationColor: LINK_DECORATION_COLOR,
      textDecorationStyle: LINK_DECORATION_STYLE,
    }),

    listGroupItemDisabledText: {
      color: LIST_GROUP_DISABLED_COLOR,
    },

    listGroupItemActiveText: {
      color: LIST_GROUP_ACTIVE_COLOR,
    },

    listGroupItemFirstChild: nOrBool => selectorFirstChild(nOrBool,
      [{
      }, mixinBorderTopRadius(constants, LIST_GROUP_BORDER_RADIUS)],
    ),

    listGroupItemLastChild: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone,
      [{
        borderBottomWidth: LIST_GROUP_BORDER_WIDTH,
      }, mixinBorderBottomRadius(constants, LIST_GROUP_BORDER_RADIUS)],
    ),

    // experimental
    listGroupItemActiveNextChild: nOrBool => selectorNotFirstChild(nOrBool, {
      marginTop: -LIST_GROUP_BORDER_WIDTH,
      borderTopWidth: LIST_GROUP_BORDER_WIDTH, // make sense?
    }),

    listGroupFlush: Object.assign({
      // pass
    },
      mixinBorderRadius(0),
    ),

    listGroupFlushItem: {
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },

    listGroupFlushItemFirstChild: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, {
      borderTopWidth: 0,
    }),

    listGroupFlushItemLastChild: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone, {
      borderBottomWidth: 0,
    }),

    // // Contextual variants
    // //
    // // Add modifier classes to change text and background color on individual items.
    // // Organizationally, this must come after the `:hover` states.

    // @each $color, $value in $theme-colors {
    //   @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));
    // }

  };

  const SCREENS_INFIXES_ALL = [''].concat(Object.keys(GRID_BREAKPOINTS));

  SCREENS_INFIXES_ALL.forEach((itemScreen) => {
    _classes['listGroupHorizontal' + itemScreen] = selectorMediaUp(itemScreen, SCREENS, {
      flexDirection: 'row',
      // more?
    });

    _classes['listGroupHorizontal' + itemScreen + 'Item'] = (
      selectorMediaUp(itemScreen, SCREENS, {
        borderBottomWidth: LIST_GROUP_BORDER_WIDTH,
        borderRightWidth: 0,
        flex: 1, // experimental // for flexWrap
      })
    );

    _classes['listGroupHorizontal' + itemScreen + 'ItemFirstChild'] = nOrBool => selectorFirstChild(nOrBool,
      selectorMediaUp(itemScreen, SCREENS, Object.assign({},
        mixinBorderBottomLeftRadius(constants, LIST_GROUP_BORDER_RADIUS),
        mixinBorderTopRightRadius(constants, 0),
      ))
    );

    _classes['listGroupHorizontal' + itemScreen + 'ItemLastChild'] = (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone,
      selectorMediaUp(itemScreen, SCREENS, Object.assign({
        borderRightWidth: LIST_GROUP_BORDER_WIDTH,
      },
        mixinBorderBottomLeftRadius(constants, 0),
        mixinBorderTopRightRadius(constants, LIST_GROUP_BORDER_RADIUS),
      ))
    );

    // experimental
    _classes['listGroupHorizontal' + itemScreen + 'ItemActive'] = (
      selectorMediaUp(itemScreen, SCREENS, {
        marginTop: 0,
      })
    );

    // experimental
    _classes['listGroupHorizontal' + itemScreen + 'ItemActiveNextChild'] = nOrBool => selectorNotFirstChild(nOrBool,
      selectorMediaUp(itemScreen, SCREENS, {
        marginLeft: -LIST_GROUP_BORDER_WIDTH,
        borderLeftWidth: LIST_GROUP_BORDER_WIDTH,
      })
    );
  });

  // listGroupItem%color / ex: listGroupItemPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

    _classes['listGroupItem' + classColor] = {
      color: THEME_COLORS[item],
      backgroundColor: colorLevel(constants, THEME_COLORS[item], -9),
    };

    _classes['listGroupItem' + classColor + 'Text'] = {
      color: THEME_COLORS[item],
    };

    // TODO: add later
    // &.list-group-item-action {
    //   @include hover-focus() {
    //     color: $color;
    //     background-color: darken($background, 5%);
    //   }

    //   &.active {
    //     color: $white;
    //     background-color: $color;
    //     border-color: $color;
    //   }
    // }
  });

  return _classes;
};
