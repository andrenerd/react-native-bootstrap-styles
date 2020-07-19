import { mixinBorderRadius } from './mixins/border-radius';

export default function getClasses(constants, classes) {
  const {
    THEME_COLORS,
    ALERT_PADDING_Y,
    ALERT_PADDING_X,
    ALERT_MARGIN_BOTTOM,
    ALERT_BORDER_RADIUS,
    ALERT_LINK_FONT_WEIGHT,
    ALERT_BORDER_WIDTH,
    ALERT_BG_LEVEL,
    ALERT_BORDER_LEVEL,
    ALERT_COLOR_LEVEL,

    CLOSE_FONT_SIZE,
    CLOSE_FONT_WEIGHT,
    CLOSE_COLOR,
  } = constants;

  const _classes = {
    alert: Object.assign({
      position: 'relative',
      paddingVertical: ALERT_PADDING_Y,
      paddingHorizontal: ALERT_PADDING_X,
      marginBottom: ALERT_MARGIN_BOTTOM,
      borderWidth: ALERT_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: 'transparent',  // is it ok?
    },
      mixinBorderRadius(constants, ALERT_BORDER_RADIUS),
    ),

    alerLink: {
      fontWeight: ALERT_LINK_FONT_WEIGHT,
    },

    // // Headings for larger alerts
    // .alert-heading {
    //   // Specified to prevent conflicts of changing $headings-color
    //   color: inherit;
    // }

    alertDismissible: {
      paddingRight: CLOSE_FONT_SIZE + ALERT_PADDING_X * 2,
    },

    alertDismissibleClose: {
      position: 'absolute',
      top: 0,
      right: 0,
      paddingVertical: ALERT_PADDING_Y,
      paddingHorizontal: ALERT_PADDING_X,
      // TODO: color: inherit;
    },

  };

  // btn%color / ex: btnPrimary
  // Object.keys(THEME_COLORS).forEach((item) => {
  //   const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  //   classes['btn' + classColor] = mixinButtonVariant(constants, THEME_COLORS[item], THEME_COLORS[item]);
  // });

  // @include alert-variant(theme-color-level($color, $alert-bg-level), theme-color-level($color, $alert-border-level), theme-color-level($color, $alert-color-level));

  // @mixin alert-variant($background, $border, $color) {
  //   color: $color;
  //   @include gradient-bg($background);
  //   border-color: $border;

  //   hr {
  //     border-top-color: darken($border, 5%);
  //   }

  //   .alert-link {
  //     color: darken($color, 10%);
  //   }
  // }

  return _classes;
};
