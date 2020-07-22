import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';
import { selectorFirstChild, selectorMediaUp, selectorMediaDown } from './mixins/selectors';
import { colorLevel } from './mixins/helpers';

export default function getClasses(constants, classes) {
  const {
    THEME_COLORS,
    GRID_BREAKPOINTS,
    SPACER,
    SCREENS,
    TABLE_COLOR, // aka text color
    TABLE_BG,
    TABLE_BORDER_WIDTH,
    TABLE_BORDER_COLOR,
    TABLE_HEAD_BG,
    TABLE_HEAD_COLOR,
    TABLE_CELL_PADDING,
    TABLE_CELL_PADDING_SM,
    TABLE_ACCENT_BG,
    TABLE_BG_LEVEL,
    TABLE_BORDER_LEVEL,
    TABLE_DARK_COLOR,
    TABLE_DARK_BG,
    TABLE_DARK_ACCENT_BG,
    TABLE_DARK_HOVER_COLOR,
    TABLE_DARK_HOVER_BG,
    TABLE_DARK_BORDER_COLOR,
  } = constants;

  const _classes = {

    table: {
      width: '100%',
      marginBottom: SPACER,
      backgroundColor: TABLE_BG,
    },

    // optional
    tableTbody: {
      flexDirection: 'column',
    },

    tableThead: {
      flexDirection: 'row',
    },

    tableTheadTh: {
      flex: 1,
      padding: TABLE_CELL_PADDING,
      justifyContent: 'flex-end',
      borderStyle: 'solid',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
      borderBottomWidth: (2 * TABLE_BORDER_WIDTH),
      borderBottomColor: TABLE_BORDER_COLOR,
    },

    tableTheadThText: {
      color: TABLE_COLOR,
    },

    tableTbodyTd: {
      flex: 1,
      padding: TABLE_CELL_PADDING,
      justifyContent: 'flex-start',
      borderStyle: 'solid',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
    },

    tableTbodyTdText: {
      color: TABLE_COLOR,
    },

    // experimental
    tableTbodyTbody: {
      borderStyle: 'solid',
      borderTopWidth: (2 * TABLE_BORDER_WIDTH),
      borderTopColor: TABLE_BORDER_COLOR,
    },

    // TODO: clarify
    tableTbodyTr: {
      flexDirection: 'row',
    },

    tableDark: {
      color: TABLE_DARK_COLOR,
      backgroundColor: TABLE_DARK_BORDER_COLOR,
    },

    tableDarkTbodyTd: {
      color: TABLE_DARK_COLOR,
      borderColor: TABLE_DARK_BORDER_COLOR,
    },

    tableDarkTbodyTdText: {
      color: TABLE_DARK_COLOR,
    },

    tableTheadDarkTh: {
      color: TABLE_DARK_COLOR,
      backgroundColor: TABLE_DARK_BG,
      borderColor: TABLE_DARK_BORDER_COLOR,
    },

    tableTheadDarkThText: {
      color: TABLE_DARK_COLOR,
    },

    tableTheadLightTh: {
      color: TABLE_HEAD_COLOR,
      backgroundColor: TABLE_HEAD_BG,
      borderColor: TABLE_BORDER_COLOR,
    },

    tableTheadLightThText: {
      color: TABLE_HEAD_COLOR,
    },

    // RESERVED / not in use
    // tableDarkBordered: {
    // },

    // RESERVED / not in use
    // tableBordered: {
    //   borderStyle: 'solid',
    //   borderTopWidth: TABLE_BORDER_WIDTH,
    //   borderTopColor: TABLE_BORDER_COLOR,
    //   borderLeftWidth: TABLE_BORDER_WIDTH,
    //   borderLeftColor: TABLE_BORDER_COLOR,
    // },

    // experimental
    tableBorderedTbodyTd: {
      borderStyle: 'solid',
      borderBottomWidth: TABLE_BORDER_WIDTH,
      borderBottomColor: TABLE_BORDER_COLOR,
      borderRightWidth: TABLE_BORDER_WIDTH,
      borderRightColor: TABLE_BORDER_COLOR,
    },

    tableBorderedTbodyTdFirstChild:  {
      borderStyle: 'solid',
      borderBottomWidth: TABLE_BORDER_WIDTH,
      borderBottomColor: TABLE_BORDER_COLOR,
      borderRightWidth: TABLE_BORDER_WIDTH,
      borderRightColor: TABLE_BORDER_COLOR,
    },

    tableBorderedTbodyTdFirstChild: nOrBool => selectorFirstChild(nOrBool, {
      borderLeftWidth: TABLE_BORDER_WIDTH,
      borderLeftColor: TABLE_BORDER_COLOR,
    }),

    // experimental
    tableBorderedTheadTh: {
      borderStyle: 'solid',
      borderRightWidth: TABLE_BORDER_WIDTH,
      borderRightColor: TABLE_BORDER_COLOR,
    },

    // experimental
    tableBorderedTheadThFirstChild: nOrBool => selectorFirstChild(nOrBool, {
      borderStyle: 'solid',
      borderLeftWidth: TABLE_BORDER_WIDTH,
      borderLeftColor: TABLE_BORDER_COLOR,
    }),

    tableBorderless: {
      borderWidth: 0,
    },

    tableBorderlessTbodyTd: {
      borderWidth: 0,
    },

    tableBorderlessTheadTh: {
      borderWidth: 0,
    },

    tableBorderlessTbodyTbody: {
      borderWidth: 0,
    },

    tableStripedTbodyTr: n => n % 2 == 0 ? {backgroundColor: TABLE_ACCENT_BG} : {},
    tableDarkStripedTbodyTr: n => n % 2 == 0 ? {backgroundColor: TABLE_DARK_ACCENT_BG} : {},
  };

  // lets make full copy
  _classes.tableSmTbodyTd = Object.assign({}, _classes.tableTbodyTd, {
    padding: TABLE_CELL_PADDING_SM,
  });

  // lets make full copy
  _classes.tableSmTheadTh = Object.assign({}, _classes.tableTheadTh, {
    padding: TABLE_CELL_PADDING_SM,
  });

  // table%colorTd / ex: listGroupItemPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

    _classes['table' + classColor + 'TBodyTd'] = {
      backgroundColor: colorLevel(constants, THEME_COLORS[item], TABLE_BG_LEVEL),
      borderColor: colorLevel(constants, THEME_COLORS[item], TABLE_BORDER_LEVEL),
    };

    _classes['table' + classColor + 'TheadTh'] = _classes['table' + classColor + 'TBodyTd'];
    _classes['table' + classColor + 'Td'] = _classes['table' + classColor + 'TBodyTd'];
    _classes['table' + classColor + 'Th'] = _classes['table' + classColor + 'TheadTh'];
    _classes['table' + classColor + 'Col'] = _classes['table' + classColor + 'Td'];
    _classes['table' + classColor + 'HeadCol'] = _classes['table' + classColor + 'Th'];

    // TODO: add later
    // // Hover states for `.table-hover`
    // // Note: this is not available for cells or rows within `thead` or `tfoot`.
    // .table-hover {
    //   $hover-background: darken($background, 5%);

    //   .table-#{$state} {
    //     @include hover() {
    //       background-color: $hover-background;

    //       > td,
    //       > th {
    //         background-color: $hover-background;
    //       }
    //     }
    //   }
    // }
  });


  // RESERVED
  // const SCREENS_INFIXES_ALL = [''].concat(Object.keys(GRID_BREAKPOINTS));
  // SCREENS_INFIXES_ALL.forEach((itemScreen) => {
  //   _classes['tableResponsive' + itemScreen] = !selectorMediaUp(itemScreen, SCREENS, true);
  // });

  // TODO: add later
  // @include table-row-variant(active, $table-active-bg);

  // aliases
  _classes.tableTh = _classes.tableTheadTh;
  _classes.tableThText = _classes.tableTheadThText;
  _classes.tableTr = _classes.tableTbodyTr;
  _classes.tableTd = _classes.tableTbodyTd;
  _classes.tableTdText = _classes.tableTbodyTdText;
  _classes.tableBorderedTh = _classes.tableBorderedTheadTh;
  _classes.tableBorderedThFirstChild = _classes.tableBorderedTheadThFirstChild;
  _classes.tableBorderedTd = _classes.tableBorderedTbodyTd;
  _classes.tableBorderedTdFirstChild = _classes.tableBorderedTbodyTdFirstChild;
  _classes.tableBorderlessTh = _classes.tableBorderlessTheadTh;
  _classes.tableBorderlessTd = _classes.tableBorderlessTbodyTd;

  _classes.tableDarkTd = _classes.tableDarkTbodyTd;
  _classes.tableDarkTh = _classes.tableDarkTbodyTd;
  _classes.tableDarkTheadTh = _classes.tableDarkTbodyTd;
  _classes.tableDarkTheadThText = _classes.tableDarkTbodyTdText;

  // more aliases
  _classes.tableHead = _classes.tableThead;
  _classes.tableHeadCol = _classes.tableTheadTh;
  _classes.tableHeadColText = _classes.tableTheadThText;
  _classes.tableSmHeadCol = _classes.tableSmTheadTh;
  _classes.tableBorderedHeadCol = _classes.tableBorderedTheadTh;
  _classes.tableBorderedHeadColFirstChild = _classes.tableBorderedTheadThFirstChild;
  _classes.tableBorderlessHeadCol = _classes.tableBorderlessTheadTh;
  _classes.tableDarkHeadCol = _classes.tableDarkTheadTh;
  _classes.tableDarkHeadColText = _classes.tableDarkTheadThText;

  // much more aliases
  _classes.tableBody = _classes.tableTbody;
  _classes.tableRow = _classes.tableTbodyTr;
  _classes.tableCol = _classes.tableTbodyTd;
  _classes.tableColText = _classes.tableTbodyTdText;

  _classes.tableSmCol = _classes.tableSmTbodyTd;
  _classes.tableBorderedCol = _classes.tableBorderedTbodyTd;
  _classes.tableBorderedColFirstChild = _classes.tableBorderedTbodyTdFirstChild;
  _classes.tableBorderlessCol = _classes.tableBorderlessTbodyTd;
  _classes.tableStripedRow = _classes.tableStripedTbodyTr;
  _classes.tableDarkStripedRow = _classes.tableDarkStripedTbodyTr;
  _classes.tableDarkCol = _classes.tableDarkTbodyTd;
  _classes.tableDarkColText = _classes.tableDarkTbodyTdText;

  return _classes;
};
