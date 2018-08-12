export default function getClasses(constants, classes) {
  const {
    GRID_BREAKPOINTS,
    GRID_COLUMNS,
    SCREENS_INFIXES,
  } = constants;

  const _classes = {
    // https://github.com/twbs/bootstrap/blob/7b766e1ad53b0c22de42dac04d2472f287334e2a/scss/utilities/_flex.scss
    flexRow: {flexDirection: 'row'},
    flexColumn: {flexDirection: 'column'},
    flexRowReverse: {flexDirection: 'row-reverse'},
    flexColumnReverse: {flexDirection: 'column-reverse'},

    flexGrow: {flexGrow: 1}, // custom / experimental

    // .flex#{$infix}-wrap         { flex-wrap: wrap !important; }
    // .flex#{$infix}-nowrap       { flex-wrap: nowrap !important; }
    // .flex#{$infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }

    justifyContentStart: {justifyContent: 'flex-start'},
    justifyContentEnd: {justifyContent: 'flex-end'},
    justifyContentCenter: {justifyContent: 'center'},
    justifyContentBetween: {justifyContent: 'space-between'},
    justifyContentAround: {justifyContent: 'space-around'},

    alignItemsStart: {alignItems: 'flex-start'},
    alignItemsEnd: {alignItems: 'flex-end'},
    alignItemsCenter: {alignItems: 'center'},
    alignItemsBaseline: {alignItems: 'baseline'},
    alignItemsStretch: {alignItems: 'stretch'},

    alignContentStart: {alignContent: 'flex-start'},
    alignContentEnd: {alignContent: 'flex-end'},
    alignContentCenter: {alignContent: 'center'},
    alignContentBetween: {alignContent: 'space-between'},
    alignContentAround: {alignContent: 'space-around'},
    alignContentStretch: {alignContent: 'stretch'},

    alignSelfAuto: {alignSelf: 'auto'},
    alignSelfStart: {alignSelf: 'flex-start'},
    alignSelfEnd: {alignSelf: 'flex-end'},
    alignSelfCenter: {alignSelf: 'center'},
    alignSelfBaseline: {alignSelf: 'baseline'},
    alignSelfStretch: {alignSelf: 'stretch'},
  };

  // flex%screen%columns
  // flex%screen (synonym to flex%screen1)
  SCREENS_INFIXES.forEach((itemScreen) => {
    Array.from(Array(GRID_COLUMNS + 1).keys()).forEach(item => _classes['flex' + itemScreen + (item + 1)] = {flex: item + 1});
    _classes['flex' + itemScreen] = _classes['flex' + itemScreen + 1]; // experimental
  });

  return _classes;
};
