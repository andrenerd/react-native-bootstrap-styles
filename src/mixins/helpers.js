import Color from 'color';

// aka helpers

export const getDefined = (v, d) => v === undefined ? d : v;

export const getScreens = (breakpoints, size) => (
  // ascending list of screens ("active" breakpoints)
  Object.keys(breakpoints)
    .sort((a, b) => (breakpoints[a] > breakpoints[b] ? 1 : -1))
    .map(item => [item, breakpoints[item]])
    .filter(item => item[1] <= size)
    .map(item => item[0])
);

export const colorYiq = (constants, color, dark, light) => {
  const c = Color(color);
  const { YIG_CONTRASTED_THRESHOLD, YIG_TEXT_DARK, YIG_TEXT_LIGHT } = constants;
  const yiq = ((c.red() * 299) + (c.green() * 587) + (c.blue() * 114)) / 1000;
  return (yiq >= YIG_CONTRASTED_THRESHOLD) ? (dark || YIG_TEXT_DARK) : (light || YIG_TEXT_LIGHT);
};

export const colorLevel = (constants, color, level = 0) => (
  Color(color || constants.PRIMARY).mix(
    Color(level > 0 ? constants.BLACK : constants.WHITE),
    Math.abs(level) * constants.THEME_COLOR_INTERVAL,
  ).hex()
);
