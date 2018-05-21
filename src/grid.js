import { mixinMakeContainer } from './mixins/grid';
// import { mixinMakeContainerMaxWidth } from './mixins/xxx';

export default function getClasses(constants, classes) {
  // const {
  // } = constants;

  const _classes = {
    container: Object.assign({
      // pass
    },
      mixinMakeContainer(constants),
      // mixinMakeContainerMaxWidth(constants, CARD_SHADOW_COLOR, CARD_SHADOW_OFFSET, CARD_SHADOW_OPACITY, CARD_SHADOW_RADIUS),
    ),

    // // Set the container width, and override it for fixed navbars in media queries.

    // @if $enable-grid-classes {
    //   .container {
    //     @include make-container();
    //     @include make-container-max-widths();
    //   }
    // }

    // // Fluid container
    // //
    // // Utilizes the mixin meant for fixed width containers, but with 100% width for
    // // fluid, full width layouts.

    // @if $enable-grid-classes {
    //   .container-fluid {
    //     @include make-container();
    //   }
    // }

    // // Row
    // //
    // // Rows contain and clear the floats of your columns.

    // @if $enable-grid-classes {
    //   .row {
    //     @include make-row();
    //   }

    //   // Remove the negative margin from default .row, then the horizontal padding
    //   // from all immediate children columns (to prevent runaway style inheritance).
    //   .no-gutters {
    //     margin-right: 0;
    //     margin-left: 0;

    //     > .col,
    //     > [class*="col-"] {
    //       padding-right: 0;
    //       padding-left: 0;
    //     }
    //   }
    // }

    // // Columns
    // //
    // // Common styles for small and large grid columns

    // @if $enable-grid-classes {
    //   @include make-grid-columns();
    // }
  };

  return _classes;
};
