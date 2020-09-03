import { selectorMediaUp } from '../mixins/selectors';

export default function getClasses(constants, classes) {
  const {
    SCREENS_INFIXES,
  } = constants;

  // experimental
  const TYPES = {
    'None': 'none',
    'Flex': 'flex',
    // how about extra values?
    // inline
    // inline-block
    // block
    // table
    // table-cell
    // table-row
    // inline-flex
  };

  const _classes = {
    // pass
  };

  // d%value / ex: dNone. dFlex
  // d%screen%value, / ex: dLgNone
  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(TYPES).forEach(item => {
      _classes['d' + itemScreen + item] = selectorMediaUp(itemScreen, SCREENS_INFIXES, {
        display: TYPES[item],
      });
    });
  });

  // dPrint%value, / ex: dPrintNone
  Object.keys(TYPES).forEach(item => {
    _classes['d' + 'Print' + item] = {
      display: TYPES[item],
    };
  });

  return _classes;
};
