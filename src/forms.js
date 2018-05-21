import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    INPUT_BG,
    INPUT_COLOR,
    FONT_SIZE_BASE,
    INPUT_BTN_PADDING_Y,
    INPUT_BTN_PADDING_X,
    INPUT_BTN_BORDER_WIDTH,
    INPUT_BORDER_COLOR,
    INPUT_BORDER_RADIUS,
  } = constants;

  const _classes = {
    formControl: Object.assign({
      width: '100%',
      paddingVertical: INPUT_BTN_PADDING_Y,
      paddingHorizontal: INPUT_BTN_PADDING_X,
      fontSize: FONT_SIZE_BASE,
      // lineHeight: INPUT_LINE_HEIGHT,

      color: INPUT_COLOR,
      backgroundColor: INPUT_BG,
      // background-clip: padding-box;

      borderStyle: 'solid',
      borderWidth: INPUT_BTN_BORDER_WIDTH,
      borderColor: INPUT_BORDER_COLOR,
    },
      mixinBorderRadius(constants, INPUT_BORDER_RADIUS),
      // RESERVED / mixinBoxShadow(constants, CARD_SHADOW_COLOR, CARD_SHADOW_OFFSET, CARD_SHADOW_OPACITY, CARD_SHADOW_RADIUS),
    ),

    // @include box-shadow($input-box-shadow);
    // @include transition($input-transition);

    // // Unstyle the caret on `<select>`s in IE10+.
    // &::-ms-expand {
    //   background-color: transparent;
    //   border: 0;
    // }

    // // Customize the `:focus` state to imitate native WebKit styles.
    // @include form-control-focus();

    // // Placeholder
    // &::placeholder {
    //   color: $input-placeholder-color;
    //   // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
    //   opacity: 1;
    // }

    // // Disabled and read-only inputs
    // //
    // // HTML5 says that controls under a fieldset > legend:first-child won't be
    // // disabled if the fieldset is disabled. Due to implementation difficulty, we
    // // don't honor that edge case; we style them as disabled anyway.
    // &:disabled,
    // &[readonly] {
    //   background-color: $input-disabled-bg;
    //   // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
    //   opacity: 1;
    // }
  };

  return _classes;
};
