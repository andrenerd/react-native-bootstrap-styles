export default function getClasses(constants, classes) {
  const {
    SIZES,
    SCREENS_INFIXES,
  } = constants;

  const _classes = {
    mw100: {
      maxWidth: '100%',
    },

    mh100: {
      maxHeight: '100%',
    },
  };

  // h%screen%size, w%screen%size / ex: h100, w50, hXs100, wLg50, wAuto
  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(SIZES).forEach(item => _classes['w' + itemScreen + item] = {width: SIZES[item]});
    Object.keys(SIZES).forEach(item => _classes['h' + itemScreen + item] = {height: SIZES[item]});
  });

  return _classes;
};
