import { mixinBorderRadius } from './mixins/border-radius';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    PROGRESS_HEIGHT,
    PROGRESS_FONT_SIZE,
    PROGRESS_BG,
    PROGRESS_BORDER_RADIUS,
    PROGRESS_BOX_SHADOW_COLOR,
    PROGRESS_BOX_SHADOW_OFFSET,
    PROGRESS_BOX_SHADOW_OPACITY,
    PROGRESS_BOX_SHADOW_RADIUS,
    PROGRESS_BAR_COLOR,
    PROGRESS_BAR_BG,
    PROGRESS_BAR_ANIMATION_TIMING,
    PROGRESS_BAR_TRANSITION,
  } = constants;

  const _classes = {
    // @keyframes progress-bar-stripes {
    //   from { background-position: $progress-height 0; }
    //   to { background-position: 0 0; }
    // }

    progress: Object.assign({
      height: PROGRESS_HEIGHT,
      overflow: 'hidden',
      backgroundColor: PROGRESS_BG,
    },
      mixinBorderRadius(constants, PROGRESS_BORDER_RADIUS),
      // TODO: replace with inner shadow
      // https://stackoverflow.com/questions/38084120/box-shadowinset-for-react-native
      // mixinBoxShadow(constants, PROGRESS_BOX_SHADOW_COLOR, PROGRESS_BOX_SHADOW_OFFSET, PROGRESS_BOX_SHADOW_OPACITY, PROGRESS_BOX_SHADOW_RADIUS),
    ),

    progressBar: {
      flex: 1, // display: flex,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: PROGRESS_BAR_BG,
      // @include transition($progress-bar-transition),
    },

    progressText: {
      color: PROGRESS_BAR_COLOR,
      fontSize: PROGRESS_FONT_SIZE,
      textAlign: 'center',
    },

    // .progress-bar-striped {
    //   @include gradient-striped();
    //   background-size: $progress-height $progress-height;
    // }

    // .progress-bar-animated {
    //   animation: progress-bar-stripes $progress-bar-animation-timing;
    // }
  };

  return _classes;
};
