import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';

export default function getClasses(constants, classes) {
  const {
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

    // Border versions
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
  };

  // lets make full copy
  tableSmTbodyTd = Object.assign({}, _classes.tableTbodyTd, {
    padding: TABLE_CELL_PADDING_SM,
  });

  // lets make full copy
  tableSmTheadTh = Object.assign({}, _classes.tableTheadTh, {
    padding: TABLE_CELL_PADDING_SM,
  });

  // aliases
  _classes.tableTh = _classes.tableTheadTh;
  _classes.tableTr = _classes.tableTbodyTr;
  _classes.tableTd = _classes.tableTbodyTd;
  _classes.tableBorderedTh = _classes.tableBorderedTheadTh;
  _classes.tableBorderedTd = _classes.tableBorderedTbodyTd;

  // aliases
  _classes.tableHead = _classes.tableThead;
  _classes.tableHeadCol = _classes.tableTheadTh;
  _classes.tableSmHeadCol = _classes.tableSmTheadTh;
  _classes.tableBorderedHeadCol = _classes.tableBorderedTheadTh;

  _classes.tableBody = _classes.tableTbody;
  _classes.tableRow = _classes.tableTbodyTr;
  _classes.tableCol = _classes.tableTbodyTd;

  _classes.tableSmCol = _classes.tableSmTbodyTd;
  _classes.tableBorderedCol = _classes.tableBorderedTbodyTd;

  return _classes;
};
