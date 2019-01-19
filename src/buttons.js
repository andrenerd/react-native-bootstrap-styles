import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    THEME_COLORS,
    INPUT_BTN_PADDING_Y,
    INPUT_BTN_PADDING_X,
    FONT_SIZE_BASE,
    INPUT_BTN_LINE_HEIGHT,
    BTN_BORDER_RADIUS,
    // OBSOLETED / BTN_FONT_WEIGHT,
    BTN_FONT_FAMILY,
    BTN_OUTLINE_BACKGROUND_COLOR,
    INPUT_BTN_BORDER_WIDTH,
  } = constants;

  const _classes = {
    btn: Object.assign({
      // display: inline-block;
      // whiteSpace: 'nowrap',
      // verticalAlign: 'middle',
      // userSelect: 'none',
      borderWidth: INPUT_BTN_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: 'transparent',

      overflow: 'hidden', // exprimental / important for rounded borders
      justifyContent: 'center', // exprimental

      // @include transition($btn-transition);

      // // Share hover and focus styles
      // @include hover-focus {
      //   text-decoration: none;
      // }
      // &:focus,
      // &.focus {
      //   outline: 0;
      //   box-shadow: $btn-focus-box-shadow;
      // }

      // // Disabled comes first so active can properly restyle
      // &.disabled,
      // &:disabled {
      //   opacity: .65;
      //   @include box-shadow(none);
      // }

      // &:active,
      // &.active {
      //   background-image: none;
      //   @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
      // }
    },
      mixinButtonSize(
        constants,
        INPUT_BTN_PADDING_Y, INPUT_BTN_PADDING_X,
        FONT_SIZE_BASE, INPUT_BTN_LINE_HEIGHT, BTN_BORDER_RADIUS,
      ),
    ),

    btnTouchable: { // experimental
      borderRadius: BTN_BORDER_RADIUS,
      overflow: 'hidden', // experimental x2
    },

    btnText: Object.assign({}, classes.text, {
      fontSize: FONT_SIZE_BASE,
      fontFamily: BTN_FONT_FAMILY,
      // OBSOLETED / fontWeight: BTN_FONT_WEIGHT,
      textAlign: 'center',
    }),
  };

  // btn%color / ex: btnPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btn' + classColor] = mixinButtonVariant(constants, THEME_COLORS[item], THEME_COLORS[item]);
  });

  // btnOutline%color / ex: btnOutlinePrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnOutline' + classColor] = mixinButtonOutlineVariant(constants, THEME_COLORS[item], BTN_OUTLINE_BACKGROUND_COLOR);
  });

  // btnText%color / ex: btnTextPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnText' + classColor] = {
      color: WHITE, // temporal
    };
  });

  // btnOutlineText%color / ex: btnOutlineTextPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnOutlineText' + classColor] = {
      color: THEME_COLORS[item], // temporal
    };
  });

  return _classes;
};
