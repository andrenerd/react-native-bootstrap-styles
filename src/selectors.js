// TODO: move the file
// selectors accept raw loop param(s) or booleans

export const selectorCondition = (condition, styleTrue = {}, styleFalse = {}) => (
  condition ? styleTrue : styleFalse
);

// TODO: let style param be an array of styles too
export const selectorFirstChild = (indexOrBool, style = {}) => (
  typeof value === 'boolean' ? (
    indexOrBool ? style : {}
  ) : (
    indexOrBool == 0 ? style : {}
  )
);

export const selectorLastChild = (indexOrBool, length = 0, style = {}) => (
  arguments.length < 3 ? (
    indexOrBool ? style : {}
  ) : (
    nOrBool(indexOrBool, n => n == length - 1) ? style : {}
  )
);

export const selectorNextChild = (indexOrBool, style = {}) => (
  typeof value === 'boolean' ? (
    indexOrBool ? style : {}
  ) : (
    indexOrBool > 0 ? style : {}
  )
);

export const selectorPreviousChild = (indexOrBool, length = 0, style = {}) => (
  arguments.length < 3 ? (
    indexOrBool ? style : {}
  ) : (
    nOrBool(indexOrBool, n => n < length - 1) ? style : {}
  )
);

// experimental
// bool makes no sense here, in fact
export const selectorNthChild = (index, condition, style = {}) => (
  condition(index) ? style : {}
);
