export default function getClasses(constants, classes) {
  const {
    REM,
    SPACERS,
    SCREENS_INFIXES,
  } = constants;

  const _classes = {
    // .m#{$infix}-auto { margin: auto !important; }
    // .mt#{$infix}-auto,
    // .my#{$infix}-auto {
    //   margin-top: auto !important;
    // }
    // .mr#{$infix}-auto,
    // .mx#{$infix}-auto {
    //   margin-right: auto !important;
    // }
    // .mb#{$infix}-auto,
    // .my#{$infix}-auto {
    //   margin-bottom: auto !important;
    // }
    // .ml#{$infix}-auto,
    // .mx#{$infix}-auto {
    //   margin-left: auto !important;
    // }
  };

  // p/m%screen%size
  // ex: pySm3, mb2, plXs0
  const SPACERS_TYPES = {margin: 'm', padding: 'p'};

  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(SPACERS).forEach((itemSpacer) => {
      Object.keys(SPACERS_TYPES).forEach((itemType) => {
        _classes[SPACERS_TYPES[itemType] + itemScreen + itemSpacer] = {[itemType]: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 'y' + itemScreen + itemSpacer] = {[itemType + 'Vertical']: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 'x' + itemScreen + itemSpacer] = {[itemType + 'Horizontal']: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 't' + itemScreen + itemSpacer] = {[itemType + 'Top']: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 'b' + itemScreen + itemSpacer] = {[itemType + 'Bottom']: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 'r' + itemScreen + itemSpacer] = {[itemType + 'Right']: SPACERS[itemSpacer] * REM};
        _classes[SPACERS_TYPES[itemType] + 'l' + itemScreen + itemSpacer] = {[itemType + 'Left']: SPACERS[itemSpacer] * REM};
      });
    });
  });

  return _classes;
};
