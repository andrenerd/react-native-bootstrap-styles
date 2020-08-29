import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';
import { mixinImageFluid } from './mixins/image';

export default function getClasses(constants, classes) {
  const {
    THUMBNAIL_PADDING,
    THUMBNAIL_BG,
    THUMBNAIL_BORDER_WIDTH,
    THUMBNAIL_BORDER_COLOR,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_BOX_SHADOW_COLOR,
    THUMBNAIL_BOX_SHADOW_OPACITY,
    THUMBNAIL_BOX_SHADOW_OFFSET,
    THUMBNAIL_BOX_SHADOW_RADIUS,
  } = constants;

  const _classes = {
    imgFluid: mixinImageFluid(constants),

    imgThumbnail: Object.assign({
      padding: THUMBNAIL_PADDING,
      backgroundColor: THUMBNAIL_BG,
      borderWidth: THUMBNAIL_BORDER_WIDTH,
      borderColor: THUMBNAIL_BORDER_COLOR,
      borderStyle: 'solid',
    },
      mixinBorderRadius(constants, THUMBNAIL_BORDER_RADIUS),
      mixinBoxShadow(constants, THUMBNAIL_BOX_SHADOW_COLOR, THUMBNAIL_BOX_SHADOW_OFFSET, THUMBNAIL_BOX_SHADOW_OPACITY, THUMBNAIL_BOX_SHADOW_RADIUS),
      mixinImageFluid(constants),
    ),

    // .figure {
    //   // Ensures the caption's text aligns with the image.
    //   display: inline-block;
    // }

    // .figure-img {
    //   margin-bottom: $spacer / 2;
    //   line-height: 1;
    // }

    // .figure-caption {
    //   @include font-size($figure-caption-font-size);
    //   color: $figure-caption-color;
    // }
  }

  return _classes;
};
