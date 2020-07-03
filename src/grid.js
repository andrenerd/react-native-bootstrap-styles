import { mixinMakeContainer, mixinMakeContainerMaxWidths } from './mixins/grid';
import { mixinMakeRow, mixinMakeCol } from './mixins/grid';

export default function getClasses(constants, classes) {
  const {
    ENABLE_GRID_CLASSES,
    GRID_COLUMNS,
    GRID_GUTTER_WIDTH,
    SCREENS_INFIXES,
    SCREENS,
    SCREEN,
  } = constants;

  const _classes = ENABLE_GRID_CLASSES ? {
    container: Object.assign({},
      mixinMakeContainer(constants),
      mixinMakeContainerMaxWidths(constants),
    ),

    containerFluid: Object.assign({},
      mixinMakeContainer(constants),
    ),

    row: Object.assign({},
      mixinMakeRow(constants, GRID_COLUMNS, GRID_GUTTER_WIDTH),
    ),

    noGutters: {
      marginRight: 0,
      marginLeft: 0,
    },

    noGuttersCol: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  } : {};

  // container%screen / ex: containerMd
  if (ENABLE_GRID_CLASSES) {
    SCREENS.forEach((item) => {
      _classes['container' + item] = Object.assign({},
        mixinMakeContainer(constants),
        mixinMakeContainerMaxWidths(constants, item),
      );
    });
  }

  // Columns

  if (ENABLE_GRID_CLASSES) {
    const gridColumnsArray = Array.from(Array(GRID_COLUMNS).keys());

    SCREENS_INFIXES.forEach((itemScreen) => {
      gridColumnsArray.forEach(item => {
        _classes['col' + itemScreen + (item || '')] = mixinMakeCol(constants, item || 1, GRID_GUTTER_WIDTH);
      });
    });
  }

  return _classes;
};
