export default function getClasses(constants, classes) {
  const {
    ENABLE_GRADIENTS,

    CAROUSEL_CONTROL_COLOR,
    CAROUSEL_CONTROL_WIDTH,
    CAROUSEL_CONTROL_OPACITY,
    CAROUSEL_CONTROL_HOVER_OPACITY,
    CAROUSEL_INDICATOR_WIDTH,
    CAROUSEL_INDICATOR_HEIGHT,
    CAROUSEL_INDICATOR_HIT_AREA_HEIGHT,
    CAROUSEL_INDICATOR_SPACER,
    CAROUSEL_INDICATOR_ACTIVE_BG,
    CAROUSEL_CAPTION_WIDTH,
    CAROUSEL_CAPTION_COLOR,
    CAROUSEL_CONTROL_ICON_WIDTH,
  } = constants;

  const _classes = {
    carousel: {
      position: 'relative',
    },

    // .carousel.pointer-event {
    //   touch-action: pan-y;
    // }

    carouselInner: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      // irrelevant / @include clearfix();
    },

    carouselItem: {
      position: 'relative',
      display: 'none',
      flexDirection: 'row', // float: left,
      width: '100%',
      marginRight: '-100%',
      backfaceVisibility: 'hidden',
      // reserved / @include transition($carousel-transition);
    },

    carouselItemActive: {
      display: 'flex',
    },
    carouselItemNext: {
      display: 'flex',
    },
    carouselItemPrev: {
      display: 'flex',
    },

    // .carousel-item-next:not(.carousel-item-left),
    // .active.carousel-item-right {
    //   transform: translateX(100%);
    // }

    // .carousel-item-prev:not(.carousel-item-right),
    // .active.carousel-item-left {
    //   transform: translateX(-100%);
    // }


    // //
    // // Alternate transitions
    // //

    // .carousel-fade {
    //   .carousel-item {
    //     opacity: 0;
    //     transition-property: opacity;
    //     transform: none;
    //   }

    //   .carousel-item.active,
    //   .carousel-item-next.carousel-item-left,
    //   .carousel-item-prev.carousel-item-right {
    //     z-index: 1;
    //     opacity: 1;
    //   }

    //   .active.carousel-item-left,
    //   .active.carousel-item-right {
    //     z-index: 0;
    //     opacity: 0;
    //     @include transition(opacity 0s $carousel-transition-duration);
    //   }
    // }

    // // Optional indicator pips
    // //
    // // Add an ordered list with the following class and add a list item for each
    // // slide your carousel holds.

    carouselIndicators: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 15,
      justifyContent: 'center',
      paddingLeft: 0, // override <ol> default
      marginRight: CAROUSEL_CONTROL_WIDTH,
      marginLeft: CAROUSEL_CONTROL_WIDTH,
      // non applicable / listStyle: 'none',

      // li {
      //   box-sizing: content-box;
      //   flex: 0 1 auto;
      //   width: $carousel-indicator-width;
      //   height: $carousel-indicator-height;
      //   margin-right: $carousel-indicator-spacer;
      //   margin-left: $carousel-indicator-spacer;
      //   text-indent: -999px;
      //   cursor: pointer;
      //   background-color: $carousel-indicator-active-bg;
      //   background-clip: padding-box;
      //   // Use transparent borders to increase the hit area by 10px on top and bottom.
      //   border-top: $carousel-indicator-hit-area-height solid transparent;
      //   border-bottom: $carousel-indicator-hit-area-height solid transparent;
      //   opacity: .5;
      //   @include transition($carousel-indicator-transition);
      // }
    },

    carouselIndicatorsItem: {
      // box-sizing: content-box;
      // flex: 0 1 auto;
      width: CAROUSEL_INDICATOR_WIDTH,
      height: CAROUSEL_INDICATOR_WIDTH,
      marginRight: CAROUSEL_INDICATOR_SPACER,
      marginLeft: CAROUSEL_INDICATOR_SPACER,
      // text-indent: -999px;
      // non applicable / cursor: pointer;
      backgroundColor: CAROUSEL_INDICATOR_ACTIVE_BG,
      // background-clip: padding-box;
      borderStyle: 'solid',
      borderTopColor: 'transparent',
      borderTopWidth: CAROUSEL_INDICATOR_HIT_AREA_HEIGHT,
      borderBottomColor: 'transparent',
      borderBottomWidth: CAROUSEL_INDICATOR_HIT_AREA_HEIGHT,
      opacity: .5,
      // @include transition($carousel-indicator-transition);
    },

    carouselIndicatorsActive: {
      opacity: 1,
    },

    carouselCaption: {
      position: 'absolute',
      right: (100 - parseInt(CAROUSEL_CAPTION_WIDTH)) / 2, // js parses percents perfectly
      bottom: '20px',
      left: (100 - parseInt(CAROUSEL_CAPTION_WIDTH)) / 2,
      zIndex: 10,
      paddingTop: '20px',
      paddingBottom: '20px',
      color: CAROUSEL_CAPTION_COLOR,
      textAlign: 'center',
    },
  };

  _classes.carouselControlPrev = _classes.carouselControlNext = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: CAROUSEL_CONTROL_WIDTH,
    color: CAROUSEL_CAPTION_COLOR,
    textAlign: 'center',
    opacity: CAROUSEL_CONTROL_OPACITY,
    // reserved / @include transition($carousel-control-transition);

    // Hover/focus state
    // @include hover-focus() {
    //   color: $carousel-control-color;
    //   text-decoration: none;
    //   outline: 0;
    //   opacity: $carousel-control-hover-opacity;
    // }
  };

  _classes.carouselControlPrev = Object.assign(_classes.carouselControlPrev, {
    left: 0,
  }, ENABLE_GRADIENTS ? {
    // reserved / backgroundImage: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));
  } : {});

  _classes.carouselControlNext = Object.assign(_classes.carouselControlNext, {
    right: 0,
  }, ENABLE_GRADIENTS ? {
    // reserved / background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));
  } : {});

  _classes.carouselControlPrevIcon = _classes.carouselControlNextIcon = {
    // non applicable / display: inline-block;
    width: CAROUSEL_CONTROL_ICON_WIDTH,
    height: CAROUSEL_CONTROL_ICON_WIDTH,
    // reserved / background: no-repeat 50% / 100% 100%;
  };

   // _classes.carouselControlPrevIcon.backgroundImage = escape-svg($carousel-control-prev-icon-bg);
   // _classes.carouselControlNextIcon.backgroundImage = escape-svg($carousel-control-next-icon-bg);

   _classes.carouselIndicatorsLi = _classes.carouselIndicatorsIteml; // for "backward" compatibility only

  return _classes;
};
