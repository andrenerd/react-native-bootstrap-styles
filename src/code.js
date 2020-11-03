import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    BORDER_RADIUS_SM,
    KBD_PADDING_Y,
    KBD_PADDING_X,
    KBD_FONT_SIZE,
    KBD_COLOR, KBD_BG,
  } = constants;

  const _classes = {

    kbd: Object.assign({
      // padding: $kbd-padding-y $kbd-padding-x;
      // @include font-size($kbd-font-size);
      // color: $kbd-color;
      // background-color: $kbd-bg;
      // @include border-radius($border-radius-sm);
      // @include box-shadow($kbd-box-shadow);

      // kbd {
      //   padding: 0;
      //   @include font-size(100%);
      //   font-weight: $nested-kbd-font-weight;
      //   @include box-shadow(none);
      // }
    },
      mixinBorderRadius(constants, BORDER_RADIUS_SM),
      // mixinBoxShadow(constants, CARD_SHADOW_COLOR, CARD_SHADOW_OFFSET, CARD_SHADOW_OPACITY, CARD_SHADOW_RADIUS),
    ),
  }

  return _classes;
};
