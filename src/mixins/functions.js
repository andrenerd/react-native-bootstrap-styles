import Color from 'color';

export const getScreens = (breakpoints, size) => (
  // ascending list of screens ("active" breakpoints)
  Object.keys(breakpoints)
    .sort((a, b) => (breakpoints[a] > breakpoints[b] ? 1 : -1))
    .map(item => [item, breakpoints[item]])
    .filter(item => item[1] <= size)
    .map(item => item[0])
);

export const colorLevel = (constants, color, level = 0) => (
  Color(color || constants.PRIMARY).mix(
    Color(level > 0 ? constants.BLACK : constants.WHITE),
    Math.abs(level) * constants.THEME_COLOR_INTERVAL,
  ).hex()
);