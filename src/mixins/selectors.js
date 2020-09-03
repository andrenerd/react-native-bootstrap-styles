// selectors accept raw loop param(s) or booleans
// TODO: how about returning FALSE, instead of empty dict?

export const selectorFirstChild = (indexOrBool, style = {}) => (
  typeof indexOrBool === 'boolean' ? (
    indexOrBool ? style : {}
  ) : (
    indexOrBool == 0 ? style : {}
  )
);

export const selectorLastChild = (indexOrBool, lengthOrStyle = {}, style = {}) => (
  arguments.length < 3 ? (
    indexOrBool ? style : {}
  ) : (
    typeof indexOrBool === 'boolean' ? (
      indexOrBool ? style : {}
    ) : (
      indexOrBool == lengthOrStyle - 1 ? style : {}
    )
  )
);

export const selectorNotFirstChild = (indexOrBool, style = {}) => (
  typeof indexOrBool === 'boolean' ? (
    indexOrBool ? style : {}
  ) : (
    indexOrBool > 0 ? style : {}
  )
);

export const selectorNotLastChild = (indexOrBool, lengthOrStyle, style = {}) => (
  arguments.length < 3 ? (
    indexOrBool ? style : {}
  ) : (
    typeof indexOrBool === 'boolean' ? (
      indexOrBool ? style : {}
    ) : (
      indexOrBool < lengthOrStyle - 1 ? style : {}
    )
  )
);

export const selectorPreviousChild = (indexOrBool, lengthOrStyle = {}, style = {}) => (
  arguments.length < 3 ? (
    indexOrBool ? lengthOrStyle : {}
  ) : (
    typeof indexOrBool === 'boolean' ? (
      indexOrBool ? style : {}
    ) : (
      indexOrBool < lengthOrStyle - 1 ? style : {}
    )
  )
);

export const selectorMediaUp = (screen, screens, style = {}) => (
  !screen || screens.indexOf(screen) > -1 ? style : false
);

export const selectorMediaDown = (screen, screens, style = {}) => (
  !screen || screens.indexOf(screen) == -1 ? style : false
);

// RESERVED
// export const selectorCondition = (bool, styleTrue = {}, styleFalse = {}) => (
//   bool ? styleTrue : styleFalse
// );

// OBSOLETED
// bool makes no sense here, in fact
// export const selectorNthChild = (index, condition, style = {}) => (
//   condition(index) ? style : {}
// );

// experimental
export function getSelectors(constants, classes) {

  const {
    SCREENS,
    GRID_BREAKPOINTS,
    ORIENTATION_PORTRAIT,
    ORIENTATION_LANDSCAPE,
  } = constants;

  const _selectors = {
    // pass
  };

  // selectorMediaUp%screen, / ex: selectorMediaUpMd
  // selectorMediaDown%screen, / ex: selectorMediaDownMd
  const SCREENS_INFIXES_ALL = Object.keys(GRID_BREAKPOINTS);

  SCREENS_INFIXES_ALL.forEach((item) => {
    _selectors['selectorMediaUp' + item] = (
      SCREENS.indexOf(item) > -1 ? style => style : style => {}
    );
  });

  SCREENS_INFIXES_ALL.forEach((item) => {
    _selectors['selectorMediaDown' + item] = (
      SCREENS.indexOf(item) == - 1 || SCREENS.indexOf(item) == SCREENS.length - 1 ? style => style : style => {}
    );
  });

  _selectors['selectorMediaPortrait'] = ORIENTATION_PORTRAIT ? style => style : style => {};
  _selectors['selectorMediaLandscape'] = ORIENTATION_LANDSCAPE ? style => style : style => {};

  return {
    selectorFirstChild,
    selectorLastChild,
    selectorNotFirstChild,
    selectorPreviousChild,
    ..._selectors
  }
}
