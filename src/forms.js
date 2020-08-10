import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    INPUT_BG,
    INPUT_COLOR,
    INPUT_FONT_FAMILY,
    INPUT_FONT_SIZE,
    INPUT_FONT_WEIGHT,
    INPUT_BORDER_COLOR,
    INPUT_BORDER_WIDTH,
    INPUT_BORDER_RADIUS,
    INPUT_SHADOW_COLOR,
    INPUT_SHADOW_OPACITY,
    INPUT_SHADOW_OFFSET,
    INPUT_SHADOW_RADIUS,
    LABEL_MARGIN_BOTTOM,
    INPUT_PADDING_Y,
    INPUT_PADDING_X,
    INPUT_LINE_HEIGHT,
    INPUT_PADDING_Y_SM,
    INPUT_PADDING_X_SM,
    INPUT_FONT_SIZE_SM,
    INPUT_LINE_HEIGHT_SM,
    INPUT_PADDING_Y_LG,
    INPUT_PADDING_X_LG,
    INPUT_FONT_SIZE_LG,
    INPUT_LINE_HEIGHT_LG,
  } = constants;

  const _classes = {
    formControl: Object.assign({
      width: '100%',
      // height: $input-height;
      paddingVertical: INPUT_PADDING_Y,
      paddingHorizontal: INPUT_PADDING_X,
      fontFamily: INPUT_FONT_FAMILY,
      fontSize: INPUT_FONT_SIZE,
      fontWeight: INPUT_FONT_WEIGHT,
      lineHeight: INPUT_LINE_HEIGHT,
      color: INPUT_COLOR,
      backgroundColor: INPUT_BG,
      // background-clip: padding-box;
      borderStyle: 'solid',
      borderWidth: INPUT_BORDER_WIDTH,
      borderColor: INPUT_BORDER_COLOR,
    },
      mixinBorderRadius(constants, INPUT_BORDER_RADIUS),
      // todo: make the shadow "inset" somehow
      mixinBoxShadow(constants, INPUT_SHADOW_COLOR, INPUT_SHADOW_OFFSET, INPUT_SHADOW_OPACITY, INPUT_SHADOW_RADIUS),
    ),

    // @include transition($input-transition);

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

    // select.form-control {
    //   &:focus::-ms-value {
    //     // Suppress the nested default white text on blue background highlight given to
    //     // the selected option text when the (still closed) <select> receives focus
    //     // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to
    //     // match the appearance of the native widget.
    //     // See https://github.com/twbs/bootstrap/issues/19398.
    //     color: $input-color;
    //     background-color: $input-bg;
    //   }
    // }

    // // Make file inputs better match text inputs by forcing them to new lines.
    // .form-control-file,
    // .form-control-range {
    //   display: block;
    //   width: 100%;
    // }

    // For use with horizontal and inline forms, when you need the label (or legend)
    // text to align with the form controls.
    colFormLabel: {
      paddingTop: INPUT_PADDING_Y + INPUT_BORDER_WIDTH,
      paddingBottom: INPUT_PADDING_Y + INPUT_BORDER_WIDTH,
      marginBottom: 0, // userless?
      lineHeight: INPUT_LINE_HEIGHT,
      fontSize: INPUT_FONT_SIZE,
    },

    colFormLabelLg: {
      paddingTop: INPUT_PADDING_Y_LG + INPUT_BORDER_WIDTH,
      paddingBottom: INPUT_PADDING_Y_LG + INPUT_BORDER_WIDTH,
      lineHeight: INPUT_LINE_HEIGHT_LG,
      fontSize: INPUT_FONT_SIZE_LG,
    },

    colFormLabelSm: {
      paddingTop: INPUT_PADDING_Y_SM + INPUT_BORDER_WIDTH,
      paddingBottom: INPUT_PADDING_Y_SM + INPUT_BORDER_WIDTH,
      lineHeight: INPUT_LINE_HEIGHT_SM,
      fontSize: INPUT_FONT_SIZE_SM,
    },

  };

  return _classes;
};
