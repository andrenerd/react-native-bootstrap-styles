export default function getClasses(constants, classes) {
  const {
    SCREENS_INFIXES,
  } = constants;

  // experimental
  const TYPES = {
    'None': 'none',
    'Flex': 'flex',
    // how about extra values?
    // inline
    // inline-block
    // block
    // table
    // table-cell
    // table-row
    // inline-flex
  };

  // d%screen%value, / ex: dLgNone
  SCREENS_INFIXES.forEach((itemScreen) => {
    Object.keys(TYPES).forEach(item => _classes['d' + itemScreen + item] = {display: TYPES[item]});
  });

  return _classes;
};


// TODO: complete

// @each $breakpoint in map-keys($grid-breakpoints) {
//   @include media-breakpoint-up($breakpoint) {
//     $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

//     @each $value in $displays {
//       .d#{$infix}-#{$value} { display: $value !important; }
//     }
//   }
// }


// //
// // Utilities for toggling `display` in print
// //

// @media print {
//   @each $value in $displays {
//     .d-print-#{$value} { display: $value !important; }
//   }
// }
