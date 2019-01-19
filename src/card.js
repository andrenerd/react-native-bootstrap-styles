import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    CARD_BG,
    CARD_CAP_BG,
    CARD_SPACER_X,
    CARD_SPACER_Y,
    CARD_BORDER_WIDTH,
    CARD_BORDER_COLOR,
    CARD_BORDER_RADIUS,
    CARD_SHADOW_COLOR,
    CARD_SHADOW_OFFSET,
    CARD_SHADOW_OPACITY,
    CARD_SHADOW_RADIUS,
  } = constants;

  const _classes = {
    card: Object.assign({
      flexDirection: 'column',
      backgroundColor: CARD_BG,
      borderWidth: CARD_BORDER_WIDTH,
      borderColor: CARD_BORDER_COLOR,
    },
      mixinBorderRadius(constants, CARD_BORDER_RADIUS),
      mixinBoxShadow(constants, CARD_SHADOW_COLOR, CARD_SHADOW_OFFSET, CARD_SHADOW_OPACITY, CARD_SHADOW_RADIUS),
    ),

    cardBody: {
      flex: 1, // experimental
      paddingHorizontal: CARD_SPACER_X,
      paddingVertical: CARD_SPACER_Y,
    },

    cardTitle: {
      marginBottom: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
    },

    cardSubtitle: {
      marginTop: -(CARD_SPACER_Y / 2),
      marginBottom: 0,
    },

    // .card-text:last-child {
    //   marginBottom: 0;
    // }

    // .card-link {
    //   @include hover {
    //     text-decoration: none;
    //   }

    //   + .card-link {
    //     margin-left: $card-spacer-x;
    //   }
    // }

    cardHeader: {
      paddingVertical: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
      backgroundColor: CARD_CAP_BG,
      borderBottomWidth: CARD_BORDER_WIDTH,
      borderBottomColor: CARD_BORDER_COLOR,

      // &:first-child {
      //   @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);
      // }

      // + .list-group {
      //   .list-group-item:first-child {
      //     border-top: 0;
      //   }
      // }
    },

    cardFooter: {
      paddingVertical: CARD_SPACER_Y,
      paddingHorizontal: CARD_SPACER_X,
      backgroundColor: CARD_CAP_BG,
      borderTopWidth: CARD_BORDER_WIDTH,
      borderTopColor: CARD_BORDER_COLOR,

      // &:last-child {
      //   @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);
      // }
    },
  };

  return _classes;
};
