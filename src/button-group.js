import { mixinBorderLeftRadius, mixinBorderRightRadius } from './mixins/border-radius';
import { mixinBorderTopRadius, mixinBorderBottomRadius } from './mixins/border-radius';
import { selectorNotFirstChild, selectorNotLastChild } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    BTN_BORDER_WIDTH,
  } = constants;

  const _classes = {

  btnGroup: {
    position: 'relative',
    // ignored / display: inline-flex,
    // ignored /vertical-align: middle; // match .btn alignment given font-size hack above

    // > .btn {
    //   position: relative;
    //   flex: 1 1 auto;

    //   // Bring the hover, focused, and "active" buttons to the front to overlay
    //   // the borders properly
    //   @include hover() {
    //     z-index: 1;
    //   }
    //   &:focus,
    //   &:active,
    //   &.active {
    //     z-index: 1;
    //   }
    // }
  },

  btnGroupVertical: {
    position: 'relative',
    // ignored / display: inline-flex;
    // ignored / vertical-align: middle; // match .btn alignment given font-size hack above

    flexDirection: 'column',
    // ignored / alignItems: 'flex-start',
    // ignored / justifyContent: 'center',

    //   > .btn,
    //   > .btn-group {
    //     width: 100%;
    //   }

    // > .btn {
    //   position: relative;
    //   flex: 1 1 auto;

    //   @include hover() {
    //     z-index: 1;
    //   }
    //   &:focus,
    //   &:active,
    //   &.active {
    //     z-index: 1;
    //   }
    // }
  },

  btnToolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  // .btn-toolbar {
  //   .input-group {
  //     width: auto;
  //   }
  // }

  btnGroupBtn: (n, length) => Object.assign({},
    selectorNotFirstChild(n, length, {
      marginLeft: -BTN_BORDER_WIDTH,
    }),
    selectorNotFirstChild(n, mixinBorderLeftRadius(constants, 0)),
    selectorNotLastChild(n, length, mixinBorderRightRadius(constants, 0)),
  ),

  // ignored / .btn-group-sm > .btn { @extend .btn-sm; }
  // ignored / .btn-group-lg > .btn { @extend .btn-lg; }

  // .dropdown-toggle-split {
  //   padding-right: $btn-padding-x * .75;
  //   padding-left: $btn-padding-x * .75;

  //   &::after,
  //   .dropup &::after,
  //   .dropright &::after {
  //     margin-left: 0;
  //   }

  //   .dropleft &::before {
  //     margin-right: 0;
  //   }
  // }

  // .btn-sm + .dropdown-toggle-split {
  //   padding-right: $btn-padding-x-sm * .75;
  //   padding-left: $btn-padding-x-sm * .75;
  // }

  // .btn-lg + .dropdown-toggle-split {
  //   padding-right: $btn-padding-x-lg * .75;
  //   padding-left: $btn-padding-x-lg * .75;
  // }

  // // The clickable button for toggling the menu
  // // Set the same inset shadow as the :active state
  // .btn-group.show .dropdown-toggle {
  //   @include box-shadow($btn-active-box-shadow);

  //   // Show no shadow for `.btn-link` since it has no other button styles.
  //   &.btn-link {
  //     @include box-shadow(none);
  //   }
  // }

  btnGroupVerticalBtn: (n, length) => Object.assign({},
    selectorNotFirstChild(n, length, {
      marginTop: -BTN_BORDER_WIDTH,
    }),
    selectorNotFirstChild(n, mixinBorderTopRadius(constants, 0)),
    selectorNotLastChild(n, length, mixinBorderBottomRadius(constants, 0)),
  ),

  // // Checkbox and radio options
  // //
  // // In order to support the browser's form validation feedback, powered by the
  // // `required` attribute, we have to "hide" the inputs via `clip`. We cannot use
  // // `display: none;` or `visibility: hidden;` as that also hides the popover.
  // // Simply visually hiding the inputs via `opacity` would leave them clickable in
  // // certain cases which is prevented by using `clip` and `pointer-events`.
  // // This way, we ensure a DOM element is visible to position the popover from.
  // //
  // // See https://github.com/twbs/bootstrap/pull/12794 and
  // // https://github.com/twbs/bootstrap/pull/14559 for more information.

  // .btn-group-toggle {
  //   > .btn,
  //   > .btn-group > .btn {
  //     margin-bottom: 0; // Override default `<label>` value

  //     input[type="radio"],
  //     input[type="checkbox"] {
  //       position: absolute;
  //       clip: rect(0, 0, 0, 0);
  //       pointer-events: none;
  //     }
  //   }
  // }


  };

  return _classes;
};
