import { mixinListUnstyled } from './mixins/lists';

export default function getClasses(constants, classes) {
  const {
    SPACER,
    H1_FONT_SIZE,
    H2_FONT_SIZE,
    H3_FONT_SIZE,
    H4_FONT_SIZE,
    H5_FONT_SIZE,
    H6_FONT_SIZE,

    HEADINGS_MARGIN_BOTTOM,
    HEADINGS_FONT_FAMILY,
    HEADINGS_FONT_WEIGHT,
    HEADINGS_COLOR,

    HR_MARGIN_Y,
    HR_BORDER_WIDTH,
    HR_BORDER_COLOR,
    FONT_SIZE_SM,
    FONT_SIZE_LG,
    MARK_PADDING, MARK_BG,
    BLOCKQUOTE_FONT_SIZE,

    LEAD_FONT_SIZE,
    LEAD_FONT_WEIGHT,
  } = constants;

  const _classes = {

    hr: {
      marginTop: HR_MARGIN_Y,
      marginBottom: HR_MARGIN_Y,
      borderWidth: 0,
      borderTopWidth: HR_BORDER_WIDTH,
      borderTopColor: HR_BORDER_COLOR,
      borderStyle: 'solid',
    },

    textSmall: {
      fontSize: FONT_SIZE_SM,
    },

    textLarge: {
      fontSize: FONT_SIZE_LG,
    },

    mark: {
      padding: MARK_PADDING,
      backgroundColor: MARK_BG,
    },

    listUnstyled: Object.assign({},
      mixinListUnstyled,
    ),

    // Inline turns list items into inline-block
    // .list-inline {
    //   @include list-unstyled();
    // }
    // .list-inline-item {
    //   display: inline-block;

    //   &:not(:last-child) {
    //     margin-right: $list-inline-padding;
    //   }
    // }

    initialism: {
      // reserved / @include font-size(90%),
      textTransform: 'uppercase',
    },

    blockquote: {
      marginBottom: SPACER,
      fontSize: BLOCKQUOTE_FONT_SIZE,
    },

    // blockquoteFooter {
    //   display: block;
    //   @include font-size($blockquote-small-font-size);
    //   color: $blockquote-small-color;

    //   &::before {
    //     content: "\2014\00A0"; // em dash, nbsp
    //   }
    // },

    lead: {
      fontSize: LEAD_FONT_SIZE,
      fontWeight: LEAD_FONT_WEIGHT,
    },
  };

  // h1, h2, h3, ...
  const HEADINGS_SIZES = [H1_FONT_SIZE, H2_FONT_SIZE, H3_FONT_SIZE, H4_FONT_SIZE, H5_FONT_SIZE, H6_FONT_SIZE];
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((item, index) => {
    classes[item] = {
      fontSize: HEADINGS_SIZES[index],
      marginBottom: HEADINGS_MARGIN_BOTTOM,
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: HEADINGS_FONT_WEIGHT,
      color: HEADINGS_COLOR,
      lineHeight: HEADINGS_SIZES[index] * 1.2, // temporal
      // RESERVED / lineHeight: HEADINGS_SIZES[index] / FONT_SIZE_BASE * LINE_HEIGHT_BASE,
    };
  });

  // // Type display classes
  // .display-1 {
  //   font-size: $display1-size;
  //   font-weight: $display1-weight;
  //   line-height: $display-line-height;
  // }
  // .display-2 {
  //   font-size: $display2-size;
  //   font-weight: $display2-weight;
  //   line-height: $display-line-height;
  // }
  // .display-3 {
  //   font-size: $display3-size;
  //   font-weight: $display3-weight;
  //   line-height: $display-line-height;
  // }
  // .display-4 {
  //   font-size: $display4-size;
  //   font-weight: $display4-weight;
  //   line-height: $display-line-height;
  // }

  // aliases
  _classes.small = _classes.textSmall
  _classes.large = _classes.textLarge

  return _classes;
};
