import { mixinMakeContainer, mixinMakeContainerMaxWidths } from './mixins/grid';
import { mixinMakeRow } from './mixins/grid';

export default function getClasses(constants, classes) {
  const {
    ENABLE_GRID_CLASSES,
    CONTAINER_MAX_WIDTHS,
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
      mixinMakeRow(constants),
    ),

    noGutters: {
      marginRight: 0,
      marginLeft: 0,
    },

    noGuttersCol: {
      paddingRight: 0,
      paddingLeft: 0,
    },

    // // Columns
    // //
    // // Common styles for small and large grid columns

    // @if $enable-grid-classes {
    //   @include make-grid-columns();
    // }

  } : {};

  // container%screen / ex: containerMd
  ENABLE_GRID_CLASSES && SCREENS.forEach((item) => {
    _classes['container' + item] = Object.assign({},
      mixinMakeContainer(constants),
      mixinMakeContainerMaxWidths(constants, item),
    );
  });


  return _classes;
};
