import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';

export default function getClasses(constants, classes) {
  const {
    SPACER,
    TABLE_COLOR,
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
      color: TABLE_COLOR, // TODO: check
      backgroundColor: TABLE_BG,
    },

    tableTh: {
      padding: TABLE_CELL_PADDING,
      justifyContent: 'flex-start',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
    },

    tableTd: {
      padding: TABLE_CELL_PADDING,
      justifyContent: 'flex-start',
      borderTopWidth: TABLE_BORDER_WIDTH,
      borderTopColor: TABLE_BORDER_COLOR,
    },

    // table: {
    //   // thead th {
    //   //   vertical-align: bottom;
    //   //   border-bottom: (2 * $table-border-width) solid $table-border-color;
    //   // }

    //   // tbody + tbody {
    //   //   border-top: (2 * $table-border-width) solid $table-border-color;
    //   // }
    // }
  };

  return _classes;
};
