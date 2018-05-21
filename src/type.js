export default function getClasses(constants, classes) {
  const {
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
  } = constants;

  const _classes = {
    // pass
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

  // RESERVED
  // .lead {
  //   font-size: $lead-font-size;
  //   font-weight: $lead-font-weight;
  // }

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

  return _classes;
};
