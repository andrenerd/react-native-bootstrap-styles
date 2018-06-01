import { colorLevel } from '../mixins/functions';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    THEME_COLORS,
  } = constants;

  const _classes = {
    // @if $enable-gradients {
    //   @each $color, $value in $theme-colors {
    //     @include bg-gradient-variant(".bg-gradient-#{$color}", $value);
    //   }
    // }

    bgWhite: {
      backgroundColor: WHITE,
    },

    bgTransparent: {
      backgroundColor: 'transparent',
    },
  };

  // bg%color / ex: bgPrimary
  // bg%colorLight / ex: bgPrimaryLight
  // bg%colorDark / ex: bgPrimaryDark
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    _classes['bg' + classColor] = {backgroundColor: THEME_COLORS[item]};

    // custom
    _classes['bg' + classColor + 'Light'] = {backgroundColor: colorLevel(constants, THEME_COLORS[item], -9)};
    _classes['bg' + classColor + 'Dark'] = {backgroundColor: colorLevel(constants, THEME_COLORS[item], 9)};

    // custom / experimental
    _classes['bg' + classColor + 'Lightest'] = {backgroundColor: colorLevel(constants, THEME_COLORS[item], -11)};
    _classes['bg' + classColor + 'Darkest'] = {backgroundColor: colorLevel(constants, THEME_COLORS[item], -11)};
  });

  return _classes;
};
