
export const getScreens = (
  breakpoints,
  size,
) => (
  // ascending list of screens ("active" breakpoints)
  Object.keys(breakpoints)
    .sort((a, b) => (breakpoints[a] > breakpoints[b] ? 1 : -1))
    .map(item => [item, breakpoints[item]])
    .filter(item => item[1] <= size)
    .map(item => item[0])
);
