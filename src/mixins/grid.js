// import { mixinBorderRadius } from './border-radius';

export const mixinMakeContainer = (
  constants,
) => (constants.ENABLE_GRID_CLASSES ? {
  flex: 1, // experimental
  width: '100%', // experimental
  flexDirection: 'row',
  paddingRight: constants.GRID_GUTTER_WIDTH / 2,
  paddingLeft: constants.GRID_GUTTER_WIDTH / 2,
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
  flex: 1,
  flexWrap: 'wrap',
  marginRight: -(gutter || constants.GRID_GUTTER_WIDTH) / 2,
  marginLeft: -(gutter || constants.GRID_GUTTER_WIDTH) / 2,
} : {});

// @mixin make-col-ready($gutter: $grid-gutter-width) {
//   position: relative;
//   // Prevent columns from becoming too narrow when at smaller grid tiers by
//   // always setting `width: 100%;`. This works because we use `flex` values
//   // later on to override this initial width.
//   width: 100%;
//   padding-right: $gutter / 2;
//   padding-left: $gutter / 2;
// }

// @mixin make-col($size, $columns: $grid-columns) {
//   flex: 0 0 percentage($size / $columns);
//   // Add a `max-width` to ensure content within each column does not blow out
//   // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
//   // do not appear to require this.
//   max-width: percentage($size / $columns);
// }

// @mixin make-col-auto() {
//   flex: 0 0 auto;
//   width: auto;
//   max-width: 100%; // Reset earlier grid tiers
// }

// @mixin make-col-offset($size, $columns: $grid-columns) {
//   $num: $size / $columns;
//   margin-left: if($num == 0, 0, percentage($num));
// }

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
