export default function getClasses(constants, classes) {
  const {
    SPACERS,
    SCREENS_INFIXES,
  } = constants;

  const _classes = {
    // pass
  };

  // p/m%screen%size
  // ex: pySm3, mb2, plXs0
  const SPACERS_TYPES = {margin: 'm', padding: 'p'};

  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(SPACERS).forEach((itemSpacer) => {
      Object.keys(SPACERS_TYPES).forEach((itemType) => {
        _classes[SPACERS_TYPES[itemType] + itemScreen + itemSpacer] = {[itemType]: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 'y' + itemScreen + itemSpacer] = {[itemType + 'Vertical']: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 'x' + itemScreen + itemSpacer] = {[itemType + 'Horizontal']: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 't' + itemScreen + itemSpacer] = {[itemType + 'Top']: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 'b' + itemScreen + itemSpacer] = {[itemType + 'Bottom']: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 'r' + itemScreen + itemSpacer] = {[itemType + 'Right']: SPACERS[itemSpacer]};
        _classes[SPACERS_TYPES[itemType] + 'l' + itemScreen + itemSpacer] = {[itemType + 'Left']: SPACERS[itemSpacer]};
      });
    });

    _classes['m' + itemScreen + 'Auto'] = {margin: 'auto'};
    _classes['my' + itemScreen + 'Auto'] = {marginVertical: 'auto'};
    _classes['mx' + itemScreen + 'Auto'] = {marginHorizontal: 'auto'};
    _classes['mt' + itemScreen + 'Auto'] = {marginTop: 'auto'};
    _classes['mb' + itemScreen + 'Auto'] = {marginBottom: 'auto'};
    _classes['mr' + itemScreen + 'Auto'] = {marginRight: 'auto'};
    _classes['ml' + itemScreen + 'Auto'] = {marginLeft: 'auto'};
  });

  return _classes;
};
