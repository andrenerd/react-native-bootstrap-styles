export default function getClasses(constants, classes) {
  const {
    GRID_BREAKPOINTS,
    GRID_COLUMNS,
    SCREENS_INFIXES,
  } = constants;

  const _classes = {
    // todo: make it "screen" aware
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

    _classes['flex' + itemScreen + 'Row'] = {flexDirection: 'row'};
    _classes['flex' + itemScreen + 'Column'] = {flexDirection: 'column'};
    _classes['flex' + itemScreen + 'RowReverse'] = {flexDirection: 'row-reverse'};
    _classes['flex' + itemScreen + 'ColumnReverse'] = {flexDirection: 'column-reverse'};

    _classes['flex' + itemScreen + 'Wrap'] = {flexWrap: 'wrap'};
    _classes['flex' + itemScreen + 'Nowrap'] = {flexWrap: 'nowrap'};
    // reserved / .flex#{$infix}-fill         { flex: 1 1 auto !important; }
    _classes['flex' + itemScreen + 'Grow0'] = {flexGrow: 0};
    _classes['flex' + itemScreen + 'Shrink0'] = {flexShrink: 0};
    _classes['flex' + itemScreen + 'Shrink1'] = {flexShrink: 1};
  });

  return _classes;
};
