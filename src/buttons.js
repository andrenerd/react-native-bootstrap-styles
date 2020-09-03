import { mixinButtonSize, mixinButtonSizeText, mixinButtonVariant, mixinButtonVariantText } from './mixins/buttons';
import { mixinButtonVariantActive, mixinButtonOutlineVariant, mixinButtonOutlineVariantText } from './mixins/buttons';
import { mixinBoxShadow } from './mixins/box-shadow';
import { selectorNotFirstChild } from './mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    BODY_COLOR,
    THEME_COLORS,
    FONT_WEIGHT_NORMAL,
    LINK_COLOR,
    LINK_DECORATION_LINE,
    LINK_DECORATION_COLOR,
    LINK_DECORATION_STYLE,
    LINK_HOVER_COLOR,
    LINK_HOVER_DECORATION_LINE,
    LINK_HOVER_DECORATION_COLOR,
    LINK_HOVER_DECORATION_STYLE,
    BTN_PADDING_Y,
    BTN_PADDING_X,
    BTN_LINE_HEIGHT,
    BTN_BORDER_WIDTH,
    BTN_FONT_FAMILY,
    BTN_FONT_SIZE,
    BTN_FONT_WEIGHT,
    BTN_ACTIVE_OPACITY,
    BTN_DISABLED_OPACITY,
    BTN_LINK_DISABLED_COLOR,
    BTN_OUTLINE_BACKGROUND_COLOR,
    BTN_BORDER_RADIUS, BTN_BORDER_RADIUS_LG, BTN_BORDER_RADIUS_SM,
    BTN_PADDING_Y_SM, BTN_PADDING_X_SM, BTN_FONT_SIZE_SM, BTN_LINE_HEIGHT_SM,
    BTN_PADDING_Y_LG, BTN_PADDING_X_LG, BTN_FONT_SIZE_LG,BTN_LINE_HEIGHT_LG,
    BTN_BLOCK_SPACING_Y,
  } = constants;

  const _classes = {
    btn: Object.assign({
      // obsoleted / alignSelf: 'flex-start', // mimic: display: inline-block;
      // see btnText / fontFamily: $btn-font-family;
      // see btnText / fontWeight: $btn-font-weight;
      // see btnText / color: $body-color;
      // see btnText / text-align: center;
      // use "numberOfLines={1}" / whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      borderWidth: BTN_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: 'transparent',
      overflow: 'hidden', // exprimental / important for rounded borders
      justifyContent: 'center', // verticalAlign: 'middle',
      // reserved / @include transition($btn-transition);
    },
      mixinButtonSize(
        constants,
        BTN_PADDING_Y, BTN_PADDING_X,
        BTN_LINE_HEIGHT, BTN_BORDER_RADIUS,
      ),
      LINK_DECORATION_LINE == 'none' ? {textDecorationLine: 'none'} : {}, // yep
    ),

    btnDisabled: Object.assign({
      opacity: BTN_DISABLED_OPACITY,
    },
      // reserved / mixinBoxShadow('none'),
    ),

    btnHover: {
      color: BODY_COLOR,
      textDecorationLine: 'none',
    },

    btnFocus: Object.assign({
      // ignored / outline: 0,
    },
      // reserved / mixinBoxShadow($btn-focus-box-shadow),
    ),

    btnActive: Object.assign({
      // pass
    },
      // reserved / mixinBoxShadow($btn-active-box-shadow),
    ),

    btnTouchable: {
      // obsoleted / alignSelf: 'flex-start',
      borderRadius: BTN_BORDER_RADIUS,
      overflow: 'hidden', // experimental
    },

    btnTouchableBlock: {
      // obsoleted / alignSelf: 'auto',
    },

    btnText: Object.assign({}, classes.text, {
      fontFamily: BTN_FONT_FAMILY,
      fontWeight: BTN_FONT_WEIGHT,
      color: BODY_COLOR,
      textAlign: 'center',
    },
      mixinButtonSizeText(constants, BTN_FONT_SIZE, BTN_LINE_HEIGHT),
    ),

    btnLink: {
      // see btnLinkText / font-weight: $font-weight-normal;
      // see btnLinkText / color: $link-color;
      // see btnLinkText / text-decoration: $link-decoration;

      // see btnLinkHoverText
      // @include hover() {
      //   color: $link-hover-color;
      //   text-decoration: $link-hover-decoration;
      // }

      // see btnLinkFocusText
      // &:focus,
      // &.focus {
      //   text-decoration: $link-hover-decoration;
      // }
    },

    btnLinkText: {
      fontWeight: FONT_WEIGHT_NORMAL,
      color: LINK_COLOR,
      textDecorationLine: LINK_DECORATION_LINE,
      textDecorationColor: LINK_DECORATION_COLOR,
      textDecorationStyle: LINK_DECORATION_STYLE,
    },

    btnLinkHoverText: {
      color: LINK_HOVER_COLOR,
      textDecorationLine: LINK_HOVER_DECORATION_LINE,
      textDecorationColor: LINK_HOVER_DECORATION_COLOR,
      textDecorationStyle: LINK_HOVER_DECORATION_STYLE,
    },

    btnLinkFocusText: {
      textDecorationLine: LINK_HOVER_DECORATION_LINE, // yep, hover
      textDecorationColor: LINK_HOVER_DECORATION_COLOR,
      textDecorationStyle: LINK_HOVER_DECORATION_STYLE,
    },

    btnLinkDisabledText: {
      color: BTN_LINK_DISABLED_COLOR,
      // pointer-events: none,
    },

    btnLg: mixinButtonSize(
      constants,
      BTN_PADDING_Y_LG, BTN_PADDING_X_LG, BTN_BORDER_RADIUS_LG,
    ),

    btnLgText: mixinButtonSizeText(
      constants,
      BTN_FONT_SIZE_LG, BTN_LINE_HEIGHT_LG,
    ),

    btnSm: mixinButtonSize(
      constants,
      BTN_PADDING_Y_SM, BTN_PADDING_X_SM, BTN_BORDER_RADIUS_SM,
    ),

    btnSmText: mixinButtonSizeText(
      constants,
      BTN_FONT_SIZE_SM, BTN_LINE_HEIGHT_SM
    ),

    btnBlock: {
      // obsoleted / alignSelf: 'auto', // reset btn:alignSelf
      width: '100%',
    },

    // experimental
    btnBlockNextChild: nOrBool => selectorNotFirstChild(nOrBool, {
      marginTop: BTN_BLOCK_SPACING_Y,
    }),
  };

  // btn%color / ex: btnPrimary
  // btn%colorText / ex: btnPrimaryText
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btn' + classColor] = Object.assign(
      mixinButtonVariant(constants, THEME_COLORS[item], THEME_COLORS[item]),
      // reserved / no "inset" style / mixinBoxShadow(constants, BTN_BOX_SHADOW_COLOR, BTN_BOX_SHADOW_OFFSET, BTN_BOX_SHADOW_OPACITY, BTN_BOX_SHADOW_RADIUS),
    );

    classes['btn' + classColor + 'Text'] = mixinButtonVariantText(constants, THEME_COLORS[item]);
    classes['btn' + classColor + 'Active'] = mixinButtonVariantActive(constants, THEME_COLORS[item], THEME_COLORS[item]);
    // obsoleted / classes['btn' + classColor + 'Disabled'] = mixinButtonVariantDisabled(constants, THEME_COLORS[item], THEME_COLORS[item]);
    // obsoleted / classes['btn' + classColor + 'DisabledText'] = mixinButtonVariantDisabledText(constants, THEME_COLORS[item]);
  });

  // btnOutline%color / ex: btnOutlinePrimary
  // btnOutline%colorText / ex: btnOutlinePrimaryText
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnOutline' + classColor] = mixinButtonOutlineVariant(constants, THEME_COLORS[item], BTN_OUTLINE_BACKGROUND_COLOR);
    classes['btnOutline' + classColor + 'Text'] = mixinButtonOutlineVariantText(constants, THEME_COLORS[item]);
    // obsoleted / classes['btnOutline' + classColor + 'Disabled'] = mixinButtonOutlineVariantDisabled(constants);
    // obsoleted / classes['btnOutline' + classColor + 'DisabledText'] = mixinButtonOutlineVariantDisabledText(constants, THEME_COLORS[item]);
  });

  return _classes;
};
