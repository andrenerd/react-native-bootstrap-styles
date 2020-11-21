// import { mixinBorderRadius } from './border-radius';

export const mixinMakeContainer = (
  constants,
  gutter = null,
) => (constants.ENABLE_GRID_CLASSES ? {
  width: '100%', // experimental
  flexDirection: 'column',
  paddingRight: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
  paddingLeft: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
  marginRight: 'auto', // experimental
  marginLeft: 'auto', // experimental
} : {});

export const mixinMakeContainerMaxWidths = (
  constants,
  screen = null,
) => (constants.ENABLE_GRID_CLASSES ? {
  maxWidth: constants.CONTAINER_MAX_WIDTHS[screen || constants.SCREEN],
} : {});

export const mixinMakeRow = (
  constants,
  gutter = null,
) => (constants.ENABLE_GRID_CLASSES ? {
  flexWrap: 'wrap',
  marginRight: -(gutter || constants.GRID_GUTTER_WIDTH) / 2,
  marginLeft: -(gutter || constants.GRID_GUTTER_WIDTH) / 2,
} : {});

// RESERVED
// export const mixinMakeColReady = (
//   constants,
//   gutter = null,
// ) => (constants.ENABLE_GRID_CLASSES ? {
//   paddingRight: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
//   paddingLeft: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
// } : {});

// experimental
export const mixinMakeCol = (
  constants,
  gutter = null,
) => (constants.ENABLE_GRID_CLASSES ? {
  flexDirection: 'column', // critical / why? / TODO: document it
  // OBSOLETED / flexBasis: 0, // harmful
  // OBSOLETED / flexGrow: 1, // harmful
  paddingRight: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
  paddingLeft: (gutter || constants.GRID_GUTTER_WIDTH) / 2,
  minWidth: 0, // excessive?
  maxWidth: '100%', // excessive?
} : {});

// RESERVED
// @mixin make-col($size, $columns: $grid-columns) {
//   flex: 0 0 percentage($size / $columns);
//   // Add a `max-width` to ensure content within each column does not blow out
//   // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
//   // do not appear to require this.
//   max-width: percentage($size / $columns);
// }

// RESERVED
// @mixin make-col-auto() {
//   flex: 0 0 auto;
//   width: auto;
//   max-width: 100%; // Reset earlier grid tiers
// }

// SKIPPED
// @mixin make-col-offset($size, $columns: $grid-columns) {
//   $num: $size / $columns;
//   margin-left: if($num == 0, 0, percentage($num));
// }

// SKIPPED
// // Row columns
// //
// // Specify on a parent element(e.g., .row) to force immediate children into NN
// // numberof columns. Supports wrapping to new lines, but does not do a Masonry
// // style grid.
// @mixin row-cols($count) {
//   & > * {
//     flex: 0 0 100% / $count;
//     max-width: 100% / $count;
//   }
// }
