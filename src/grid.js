import { mixinMakeContainer, mixinMakeContainerMaxWidths } from './mixins/grid';
import { mixinMakeRow, mixinMakeCol } from './mixins/grid';
import { getScreens } from './mixins/helpers';

export default function getClasses(constants, classes) {
  const {
    ENABLE_GRID_CLASSES,
    GRID_BREAKPOINTS,
    GRID_COLUMNS,
    GRID_GUTTER_WIDTH,
    SCREENS_INFIXES,
    // OBSOLETED / SCREEN,
  } = constants;

  const _classes = ENABLE_GRID_CLASSES ? {

    // TODO: add later
    // container: Object.assign({},
    //   mixinMakeContainer(constants),
    //   mixinMakeContainerMaxWidths(constants),
    // ),

    containerFluid: Object.assign({},
      mixinMakeContainer(constants),
    ),

    noGutters: {
      marginRight: 0,
      marginLeft: 0,
    },

    noGuttersCol: {
      paddingRight: 0,
      paddingLeft: 0,
    },

    // experimental / in use
    Gutters: {
      marginRight: -GRID_GUTTER_WIDTH / 2,
      marginLeft: -GRID_GUTTER_WIDTH / 2,
    },

    // experimental / in use
    GuttersCol: {
      paddingRight: GRID_GUTTER_WIDTH / 2,
      paddingLeft: GRID_GUTTER_WIDTH / 2,
    },
  } : {};

  // container%screen / ex: containerMd
  if (ENABLE_GRID_CLASSES) {
    SCREENS_INFIXES.forEach((item) => {
      _classes['container' + item] = Object.assign({},
        mixinMakeContainer(constants),
        mixinMakeContainerMaxWidths(constants, item),
      );
    });
  }

  if (ENABLE_GRID_CLASSES) {
    const SCREENS_INFIXES_ALL = [''].concat(Object.keys(GRID_BREAKPOINTS));
    const gridColumnsArray = Array.from(Array(GRID_COLUMNS).keys());

    SCREENS_INFIXES_ALL.forEach((itemScreen) => {
      _classes['row' + itemScreen] = Object.assign(mixinMakeRow(constants),
        SCREENS_INFIXES.indexOf(itemScreen) > -1 ? { // dirty
          flexDirection: 'row',
          // more?
        } : {}
      );
    });

    SCREENS_INFIXES_ALL.forEach((itemScreen) => {
      GRID_COLUMNS && gridColumnsArray.forEach(item => {
        _classes['col' + itemScreen + (item || '')] = Object.assign(mixinMakeCol(constants),
          SCREENS_INFIXES.indexOf(itemScreen) > -1 ? { // dirty
            flex: item || 1,
            // more?
          } : {}
        );
      });

      // SKIPPED
      // _classes['col' + itemScreen + 'Auto'] = mixinMakeCol(constants);
    });

    // Row columns
    // .row-cols-*
    // SKIPPED

    // Offsetting columns
    // .offset-*-*
    // SKIPPED

    // Reordering
    // .order-*-*
    // SKIPPED
  }

  return _classes;
};
