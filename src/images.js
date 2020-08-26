import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

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
    // // Responsive images (ensure images don't scale beyond their parents)
    // //
    // // This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.
    // // We previously tried the "images are responsive by default" approach in Bootstrap v2,
    // // and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)
    // // which weren't expecting the images within themselves to be involuntarily resized.
    // // See also https://github.com/twbs/bootstrap/issues/18178
    // .img-fluid {
    //   @include img-fluid();
    // }

    imgThumbnail: Object.assign({
      padding: THUMBNAIL_PADDING,
      backgroundColor: THUMBNAIL_BG,
      borderWidth: THUMBNAIL_BORDER_WIDTH,
      borderColor: THUMBNAIL_BORDER_COLOR,
      borderStyle: 'solid',
      // // Keep them at most 100% wide
      // @include img-fluid();
    },
      mixinBorderRadius(constants, THUMBNAIL_BORDER_RADIUS),
      mixinBoxShadow(constants, THUMBNAIL_BOX_SHADOW_COLOR, THUMBNAIL_BOX_SHADOW_OFFSET, THUMBNAIL_BOX_SHADOW_OPACITY, THUMBNAIL_BOX_SHADOW_RADIUS),
    ),

    // //
    // // Figures
    // //

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
