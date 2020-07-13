import { mixinBorderRadius, mixinBorderTopRadius, mixinBorderBottomRadius } from './mixins/border-radius';
import { selectorFirstChild, selectorLastChild } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    LINK_DECORATION,

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
      color: LIST_GROUP_COLOR,
      textDecorationLine: LINK_DECORATION,

      // &.disabled,
      // &:disabled {
      //   color: $list-group-disabled-color;
      //   pointer-events: none;
      //   background-color: $list-group-disabled-bg;
      // }

      // // Include both here for `<a>`s and `<button>`s
      // &.active {
      //   z-index: 2; // Place active items above their siblings for proper border styling
      //   color: $list-group-active-color;
      //   background-color: $list-group-active-bg;
      //   border-color: $list-group-active-border-color;
      // }

      // & + & {
      //   border-top-width: 0;

      //   &.active {
      //     margin-top: -$list-group-border-width;
      //     border-top-width: $list-group-border-width;
      //   }
      // }
    },

    listGroupItemText: {
      color: LIST_GROUP_COLOR,
      textDecorationLine: LINK_DECORATION,
    },

    listGroupItemFirstChild: nOrBool => selectorFirstChild(nOrBool,
      [mixinBorderTopRadius(constants, LIST_GROUP_BORDER_RADIUS)],
    ),

    listGroupItemLastChild: (nOrBool, lengthOrNone) => selectorLastChild(nOrBool, lengthOrNone,
      [{
        borderBottomWidth: LIST_GROUP_BORDER_WIDTH,
        borderBottomColor: LIST_GROUP_BORDER_COLOR,
      }, mixinBorderBottomRadius(constants, LIST_GROUP_BORDER_RADIUS)],
    ),

    // // Horizontal
    // //
    // // Change the layout of list group items from vertical (default) to horizontal.

    // @each $breakpoint in map-keys($grid-breakpoints) {
    //   @include media-breakpoint-up($breakpoint) {
    //     $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    //     .list-group-horizontal#{$infix} {
    //       flex-direction: row;

    //       > .list-group-item {
    //         &:first-child {
    //           @include border-bottom-left-radius($list-group-border-radius);
    //           @include border-top-right-radius(0);
    //         }

    //         &:last-child {
    //           @include border-top-right-radius($list-group-border-radius);
    //           @include border-bottom-left-radius(0);
    //         }

    //         &.active {
    //           margin-top: 0;
    //         }

    //         & + .list-group-item {
    //           border-top-width: $list-group-border-width;
    //           border-left-width: 0;

    //           &.active {
    //             margin-left: -$list-group-border-width;
    //             border-left-width: $list-group-border-width;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }


    // // Flush list items
    // //
    // // Remove borders and border-radius to keep list group items edge-to-edge. Most
    // // useful within other components (e.g., cards).

    // .list-group-flush {
    //   @include border-radius(0);

    //   > .list-group-item {
    //     border-width: 0 0 $list-group-border-width;

    //     &:last-child {
    //       border-bottom-width: 0;
    //     }
    //   }
    // }


    // // Contextual variants
    // //
    // // Add modifier classes to change text and background color on individual items.
    // // Organizationally, this must come after the `:hover` states.

    // @each $color, $value in $theme-colors {
    //   @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));
    // }

  };

  return _classes;
};
