import Color from 'color';
import { colorLevel } from '../mixins/helpers';
import { selectorMediaUp } from '../mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    BLACK,
    BODY_COLOR,
    THEME_COLORS,
    SCREENS_INFIXES,
    TEXT_MUTED,
    FONT_FAMILY_BASE,
    FONT_FAMILY_BASE_LIGHT, // experimental
    FONT_FAMILY_BASE_BOLD, // experimental
    FONT_FAMILY_MONOSPACE,
    FONT_WEIGHT_NORMAL,
    FONT_WEIGHT_LIGHT,
    FONT_WEIGHT_BOLD,
    FONT_SIZE_BASE,
    FONT_SIZE_SM,
    FONT_SIZE_LG,
  } = constants;

  const _classes = {
    fontWeightLight: {fontWeight: FONT_WEIGHT_LIGHT, fontFamily: FONT_FAMILY_BASE_LIGHT},
    fontWeightNormal: {fontWeight: FONT_WEIGHT_NORMAL},
    fontWeightBold: {fontWeight: FONT_WEIGHT_BOLD, fontFamily: FONT_FAMILY_BASE_BOLD},
    fontItalic: {fontStyle: 'italic'},

    textBody: {color: BODY_COLOR},
    textWhite: {color: WHITE},
    textMuted: {color: TEXT_MUTED},

    textBlack50: {color: Color(BLACK).fade(0.5).rgb().string()},
    textWhite50: {color: Color(WHITE).fade(0.5).rgb().string()},

    //  textAuto: {textAlign: 'auto'},
    // textLeft: {textAlign: 'left'},
    // textRight: {textAlign: 'right'},
    textCenter: {textAlign: 'center'},
    textJustify: {textAlign: 'justify'},

    // experimental
    textSmall: {fontSize: FONT_SIZE_SM},
    textLarge: {fontSize: FONT_SIZE_LG},
    textSpaced: {letterSpacing: FONT_SIZE_BASE * 0.075},

    textMonospace: {fontFamily: FONT_FAMILY_MONOSPACE},
  };

  const ALIGN_TYPES = {
    'Auto': 'auto',
    'Left': 'left',
    'Right': 'right',
    'Center': 'center',
    'Justify': 'justify',
  };

  // text%value / ex: floatRight
  // text%screen%value, / ex: floatLgRight
  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(ALIGN_TYPES).forEach(item => {
      _classes['float' + itemScreen + item] = selectorMediaUp(itemScreen, SCREENS_INFIXES, {
        textAlign: ALIGN_TYPES[item],
      });
    });
  });

  // text%color / ex: textPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    _classes['text' + classColor] = {color: THEME_COLORS[item]};

    // custom
    _classes['text' + classColor + 'Light'] = {color: colorLevel(constants, THEME_COLORS[item], -9)};
    _classes['text' + classColor + 'Dark'] = {color: colorLevel(constants, THEME_COLORS[item], 9)};

    // custom / experimental
    _classes['text' + classColor + 'Lightest'] = {color: colorLevel(constants, THEME_COLORS[item], -11)};
    _classes['text' + classColor + 'Darkest'] = {color: colorLevel(constants, THEME_COLORS[item], -11)};
  });
  // RESERVED / a#color%item: @include hover-focus { color: darken($color, 10%) !important; } // MIXIN_TEXT_EMPHASIS_VARIANT

  // @mixin text-emphasis-variant($parent, $color) {
  //   #{$parent} {
  //     color: $color !important;
  //   }
  //   a#{$parent} {
  //     @include hover-focus {
  //       color: darken($color, 10%) !important;
  //     }
  //   }
  // }

  return _classes;
};
