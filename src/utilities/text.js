import { colorLevel } from '../mixins/functions';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    BLACK,
    BODY_COLOR,
    THEME_COLORS,
    TEXT_MUTED,
    FONT_FAMILY_BASE,
    FONT_FAMILY_BASE_LIGHT, // experimental
    FONT_FAMILY_BASE_BOLD, // experimental
    FONT_WEIGHT_NORMAL,
    FONT_WEIGHT_LIGHT,
    FONT_WEIGHT_BOLD,
    FONT_SIZE_BASE,
    FONT_SIZE_BASE_SM,
    FONT_SIZE_BASE_LG,
  } = constants;

  const _classes = {
    fontWeightLight: {fontWeight: FONT_WEIGHT_LIGHT, fontFamily: FONT_FAMILY_BASE_LIGHT},
    fontWeightNormal: {fontWeight: FONT_WEIGHT_NORMAL},
    fontWeightBold: {fontWeight: FONT_WEIGHT_BOLD, fontFamily: FONT_FAMILY_BASE_BOLD},
    fontItalic: {fontStyle: 'italic'},

    textBody: {color: BODY_COLOR},
    textWhite: {color: WHITE},
    textMuted: {color: TEXT_MUTED},

    // textBlack50: {color: Color(BLACK).fade(0.5).rgb().string()},
    // textWhite50: {color: Color(WHITE).fade(0.5).rgb().string()},

    textAuto: {textAlign: 'auto'},
    textLeft: {textAlign: 'left'},
    textRight: {textAlign: 'right'},
    textCenter: {textAlign: 'center'},
    textJustify: {textAlign: 'justify'},

    // experimental
    textSmall: {fontSize: FONT_SIZE_BASE_SM},
    textLarge: {fontSize: FONT_SIZE_BASE_LG},
    textSpaced: {letterSpacing: FONT_SIZE_BASE * 0.075},
  };

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
