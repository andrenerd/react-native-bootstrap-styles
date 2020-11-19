import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    BORDER_RADIUS_SM,
    KBD_PADDING_Y,
    KBD_PADDING_X,
    KBD_FONT_SIZE,
    KBD_COLOR,
    KBD_BG,
  } = constants;

  const _classes = {

    kbd: Object.assign({
      paddingHorizontal: KBD_PADDING_X,
      paddingVertical: KBD_PADDING_Y,
      color: KBD_COLOR,
      backgroundColor: KBD_BG,

      // kbd {
      //   padding: 0;
      //   @include font-size(100%);
      //   font-weight: $nested-kbd-font-weight;
      //   @include box-shadow(none);
      // }
    },
      mixinBorderRadius(constants, BORDER_RADIUS_SM),
      // not supported / inset shadow / mixinBoxShadow(constants, ...),
    ),
  }

  return _classes;
};
