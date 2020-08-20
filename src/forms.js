import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';
import { selectorMediaUp } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    SCREENS,
    INPUT_BG,
    INPUT_COLOR,
    INPUT_FONT_FAMILY,
    INPUT_FONT_SIZE,
    INPUT_FONT_WEIGHT,
    INPUT_BORDER_COLOR,
    INPUT_BORDER_WIDTH,
    INPUT_BORDER_RADIUS,
    INPUT_BORDER_RADIUS_SM,
    INPUT_BORDER_RADIUS_LG,
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
    INPUT_PLAINTEXT_COLOR,
    INPUT_PLACEHOLDER_COLOR,
    FORM_TEXT_MARGIN_TOP,
    FORM_CHECK_INPUT_GUTTER,
    FORM_CHECK_INPUT_MARGIN_Y,
    FORM_CHECK_INPUT_MARGIN_X,
    FORM_CHECK_INLINE_MARGIN_X,
    FORM_CHECK_INLINE_INPUT_MARGIN_X,
    FORM_GRID_GUTTER_WIDTH,
    FORM_GROUP_MARGIN_BOTTOM,
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

    formControlPlaintext: {
      width: '100%',
      paddingVertical: INPUT_PADDING_Y,
      paddingHorizontal: 0,
      marginBottom: 0, // match inputs if this class comes on inputs with default margins
      fontSize: INPUT_FONT_SIZE,
      lineHeight: INPUT_LINE_HEIGHT,
      color: INPUT_PLAINTEXT_COLOR,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderTopWidth: INPUT_BORDER_WIDTH,
      borderBottomWidth: INPUT_BORDER_WIDTH,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },

    formControlPlaintextFormControlSm: {
      paddingRight: 0,
      paddingLeft: 0,
    },

    formControlPlaintextFormControlLg: {
      paddingRight: 0,
      paddingLeft: 0,
    },

    formControlSm: Object.assign({
      height: INPUT_LINE_HEIGHT_SM,
      paddingVertical: INPUT_PADDING_Y_SM,
      paddingHorizontal: INPUT_PADDING_X_SM,
      fontSize: INPUT_FONT_SIZE_SM,
      lineHeight: INPUT_LINE_HEIGHT_SM,
    },
      mixinBorderRadius(constants, INPUT_BORDER_RADIUS_SM),
    ),

    formControlLg: Object.assign({
      height: INPUT_LINE_HEIGHT_LG,
      paddingVertical: INPUT_PADDING_Y_LG,
      paddingHorizontal: INPUT_PADDING_X_LG,
      fontSize: INPUT_FONT_SIZE_LG,
      lineHeight: INPUT_LINE_HEIGHT_LG,
    },
      mixinBorderRadius(constants, INPUT_BORDER_RADIUS_LG),
    ),

    // // stylelint-disable-next-line no-duplicate-selectors
    // select.form-control {
    //   &[size],
    //   &[multiple] {
    //     height: auto;
    //   }
    // }

    // textarea.form-control {
    //   height: auto;
    // }

    formGroup: {
      marginBottom: FORM_GROUP_MARGIN_BOTTOM,
    },

    formText: {
      // display: block;
      marginTop: FORM_TEXT_MARGIN_TOP,
    },

    formRow: {
      // display: flex;
      flexWrap: 'wrap',
      marginRight: -FORM_GRID_GUTTER_WIDTH / 2,
      marginLeft: -FORM_GRID_GUTTER_WIDTH / 2,

      // > .col,
      // > [class*="col-"] {
      //   padding-right: $form-grid-gutter-width / 2;
      //   padding-left: $form-grid-gutter-width / 2;
      // }
    },

    formCol: {
      paddingRight: FORM_GRID_GUTTER_WIDTH / 2,
      paddingLeft: FORM_GRID_GUTTER_WIDTH / 2,
    },

    // .form-check {
    //   position: relative;
    //   display: block;
    //   padding-left: $form-check-input-gutter;
    // }

    // .form-check-input {
    //   position: absolute;
    //   margin-top: $form-check-input-margin-y;
    //   margin-left: -$form-check-input-gutter;

    //   // Use [disabled] and :disabled for workaround https://github.com/twbs/bootstrap/issues/28247
    //   &[disabled] ~ .form-check-label,
    //   &:disabled ~ .form-check-label {
    //     color: $text-muted;
    //   }
    // }

    // .form-check-label {
    //   margin-bottom: 0; // Override default `<label>` bottom margin
    // }

    // .form-check-inline {
    //   display: inline-flex;
    //   align-items: center;
    //   padding-left: 0; // Override base .form-check
    //   margin-right: $form-check-inline-margin-x;

    //   // Undo .form-check-input defaults and add some `margin-right`.
    //   .form-check-input {
    //     position: static;
    //     margin-top: 0;
    //     margin-right: $form-check-inline-input-margin-x;
    //     margin-left: 0;
    //   }
    // }

    // // Form validation
    // //
    // // Provide feedback to users when form field values are valid or invalid. Works
    // // primarily for client-side validation via scoped `:invalid` and `:valid`
    // // pseudo-classes but also includes `.is-invalid` and `.is-valid` classes for
    // // server side validation.

    // @each $state, $data in $form-validation-states {
    //   @include form-validation-state($state, map-get($data, color), map-get($data, icon));
    // }

    formInline: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',  // Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height)
    },
 
    // todo check it later / useless?
    formInlineFormCheck: {
      width: '100%',
    },

    formInlineLabel: selectorMediaUp('Sm', SCREENS, {
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 0,
    }),

    formInlineFormGroup: selectorMediaUp('Sm', SCREENS, {
      // display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 0,
    }),

    formInlineFormControl: selectorMediaUp('Sm', SCREENS, {
      // display: inline-block;
      width: 'auto', // Prevent labels from stacking above inputs in `.form-group`
      // verticalAlign: middle;
    }),

    formInlineFormControlPlaintext: selectorMediaUp('Sm', SCREENS, {
      // display: inline-block;
    }),

    formInlineInputGroup: selectorMediaUp('Sm', SCREENS, {
      width: 'auto',
    }),

    formInlineCustomSelect: selectorMediaUp('Sm', SCREENS, {
      width: 'auto',
    }),

    formInlineFormCheck: selectorMediaUp('Sm', SCREENS, {
      // display: flex;
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      paddingLeft: 0,
    }),

    formInlineFormCheckInput: selectorMediaUp('Sm', SCREENS, {
      position: 'relative',
      flexShrink: 0,
      marginTop: 0,
      marginRight: FORM_CHECK_INPUT_MARGIN_X,
      marginLeft: 0,
    }),

    formInlineCustomControl: selectorMediaUp('Sm', SCREENS, {
      alignItems: 'center',
      justifyContent: 'center',
    }),

    formInlineCustomControlLabel: selectorMediaUp('Sm', SCREENS, {
      marginBottom: 0,
    }),
  };

  return _classes;
};
