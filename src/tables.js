import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';
import { selectorCondition } from './mixins/selectors';
import { colorLevel } from './mixins/helpers';

export default function getClasses(constants, classes) {
  const {
    THEME_COLORS,
    SPACER,
    // SKIPPED / TABLE_COLOR,
    TABLE_BG,
    TABLE_BORDER_WIDTH,
    TABLE_BORDER_COLOR,
    TABLE_HEAD_BG,
    TABLE_HEAD_COLOR,
    TABLE_CELL_PADDING,
    TABLE_CELL_PADDING_SM,
    TABLE_CAPTION_COLOR,
    TABLE_ACCENT_BG,
    TABLE_BG_LEVEL,
    TABLE_BORDER_LEVEL,
  } = constants;

  const _classes = {

    table: {
      width: '100%',
      marginBottom: SPACER,
      backgroundColor: TABLE_BG,
      // SKIPPED / color: TABLE_COLOR,
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

    tableTbodyTd: {
      flex: 1,
      padding: TABLE_CELL_PADDING,
      justifyContent: 'flex-start',
      borderStyle: 'solid',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
    },

    // experimental
    tableTbodyTbody: {
      borderStyle: 'solid',
      borderTopWidth: (2 * TABLE_BORDER_WIDTH),
      borderTopColor: TABLE_BORDER_COLOR,
    },

    // TODO: clarify
    tableThead: {
      flexDirection: 'row',
    },

    // TODO: clarify
    tableTbodyTr: {
      flexDirection: 'row',
    },

    // experimental
    tableBordered: {
      borderStyle: 'solid',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
      borderLeftWidth: TABLE_BORDER_WIDTH,
      borderLeftColor: TABLE_BORDER_COLOR,
    },

    tableBorderedTbodyTd: {
      borderStyle: 'solid',
      borderBottomWidth: TABLE_BORDER_WIDTH,
      borderBottomColor: TABLE_BORDER_COLOR,
      borderRightWidth: TABLE_BORDER_WIDTH,
      borderRightColor: TABLE_BORDER_COLOR,
    },

    tableBorderedTheadTh: {
      borderStyle: 'solid',
      borderBottomWidth: 2 * TABLE_BORDER_WIDTH,
      borderRightWidth: TABLE_BORDER_WIDTH,
      borderRightColor: TABLE_BORDER_COLOR,
    },

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

  };

  // lets make full copy
  tableSmTbodyTd = Object.assign({}, _classes.tableTbodyTd, {
    padding: TABLE_CELL_PADDING_SM,
  });

  // lets make full copy
  tableSmTheadTh = Object.assign({}, _classes.tableTheadTh, {
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

  // TODO: add later
  // @include table-row-variant(active, $table-active-bg);

  // aliases
  _classes.tableTh = _classes.tableTheadTh;
  _classes.tableTr = _classes.tableTbodyTr;
  _classes.tableTd = _classes.tableTbodyTd;
  _classes.tableBorderedTh = _classes.tableBorderedTheadTh;
  _classes.tableBorderedTd = _classes.tableBorderedTbodyTd;
  _classes.tableBorderlessTh = _classes.tableBorderlessTheadTh;
  _classes.tableBorderlessTd = _classes.tableBorderlessTbodyTd;

  // aliases
  _classes.tableHead = _classes.tableThead;
  _classes.tableHeadCol = _classes.tableTheadTh;
  _classes.tableSmHeadCol = _classes.tableSmTheadTh;
  _classes.tableBorderedHeadCol = _classes.tableBorderedTheadTh;
  _classes.tableBorderlessHeadCol = _classes.tableBorderlessTheadTh;

  _classes.tableBody = _classes.tableTbody;
  _classes.tableRow = _classes.tableTbodyTr;
  _classes.tableCol = _classes.tableTbodyTd;

  _classes.tableSmCol = _classes.tableSmTbodyTd;
  _classes.tableBorderedCol = _classes.tableBorderedTbodyTd;
  _classes.tableBorderlessCol = _classes.tableBorderlessTbodyTd;
  _classes.tableStripedRow = _classes.tableStripedTbodyTr;

  return _classes;
};
