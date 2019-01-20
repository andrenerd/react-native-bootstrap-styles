import { StyleSheet, Dimensions } from 'react-native';

export default function getConstants(constants) {
  const {

    // Options

    ENABLE_ROUNDED = true,
    ENABLE_SHADOWS = true,
    // $enable-gradients:          false !default;
    // $enable-transitions:        true !default;
    ENABLE_GRID_CLASSES = true,

    REM = 14,

    // Colors

    WHITE = '#fff',
    GRAY_100 = '#f8f9fa',
    GRAY_200 = '#e9ecef',
    GRAY_300 = '#dee2e6',
    GRAY_400 = '#ced4da',
    GRAY_500 = '#adb5bd',
    GRAY_600 = '#6c757d',
    GRAY_700 = '#495057',
    GRAY_800 = '#343a40',
    GRAY_900 = '#212529',
    BLACK = '#000',

    GRAYS = {
      '100': GRAY_100,
      '200': GRAY_200,
      '300': GRAY_300,
      '400': GRAY_400,
      '500': GRAY_500,
      '600': GRAY_600,
      '700': GRAY_700,
      '800': GRAY_800,
      '900': GRAY_900,
    },

    BLUE = '#007bff',
    CYAN = '#17a2b8',
    RED = '#dc3545',
    YELLOW = '#ffc107',
    GREEN = '#28a745',
    INDIGO = '#6610f2',
    PYRPLE = '#6f42c1',
    PINK = '#e83e8c',
    ORANGE = '#fd7e14',
    TEAL = '#20c997',

    PRIMARY = BLUE,
    SECONDARY = GRAY_600,
    SUCCESS = GREEN,
    INFO = CYAN,
    WARNING = YELLOW,
    DANGER = RED,
    LIGHT = GRAY_100,
    DARK = GRAY_800,

    THEME_COLORS = {
      PRIMARY: PRIMARY,
      SECONDARY: SECONDARY,
      SUCCESS: SUCCESS,
      INFO: INFO,
      WARNING: WARNING,
      DANGER: DANGER,
      LIGHT: LIGHT,
      DARK: DARK,
    },

    THEME_COLOR_INTERVAL = 0.08, // 8%

    // Spacing

    SPACER = 1,
    SPACERS = {
      0: 0,
      1: (SPACER * 0.25),
      2: (SPACER * 0.5),
      3: (SPACER * 1),
      4: (SPACER * 1.5),
      5: (SPACER * 3),
    },

    SIZES = {
      5: '5%',
      10: '20%',
      15: '15%',
      20: '20%',
      25: '25%',
      30: '30%',
      35: '35%',
      40: '40%',
      45: '45%',
      50: '50%',
      55: '55%',
      60: '60%',
      65: '65%',
      70: '70%',
      75: '75%',
      80: '80%',
      85: '85%',
      90: '90%',
      95: '95%',
      100: '100%',
      Auto: 'auto', // what??
    },

    GRID_BREAKPOINTS_HORIZONTAL = {
      Xs: 0, // should start at zero
      Sm: 360, // Samsung / 375 for iPhone
      Md: 411, // Google / 414 for iPhone
      Lg: 768, // iPad and Nexus
      Xl: 1024, // iPad Pro
    },

    GRID_BREAKPOINTS_VERTICAL = {
      Xs: 0, // should start at zero
      Sm: 640,
      Md: 768,
      Lg: 1024,
      Xl: 1280,
    },

    GRID_BREAKPOINTS = GRID_BREAKPOINTS_HORIZONTAL,

    // Body

    BODY_BG = WHITE,
    BODY_COLOR = GRAY_900,

    // Links

    LINK_COLOR = INFO,
    LINK_DECORATION = 'underline',

    // Grid

    GRID_COLUMNS = 12,
    GRID_GUTTER_WIDTH = SPACER * 1.5 * REM,

    // Components

    LINE_HEIGHT_LG = 1.5 * REM,
    LINE_HEIGHT_SM = 1.5 * REM,

    BORDER_WIDTH = StyleSheet.hairlineWidth, // 1
    BORDER_COLOR = GRAY_300,

    BORDER_RADIUS = 0.25 * REM,
    BORDER_RADIUS_LG = 0.3 * REM,
    BORDER_RADIUS_SM = 0.2 * REM,

    SHADOW_COLOR = BLACK, // new
    SHADOW_OPACITY = 0.2, // new
    SHADOW_OFFSET = {width: 0.1 * REM, height: 0.1 * REM}, // new / experimental

    // Fonts

    FONT_FAMILY_SANS_SERIF = 'System', // iOS: 'San Francisco'
    FONT_FAMILY_MONOSPACE = 'System', // iOS: 'SFMono-Regular',
    FONT_FAMILY_BASE = FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_BASE_LIGHT = FONT_FAMILY_SANS_SERIF,
    FONT_FAMILY_BASE_BOLD = FONT_FAMILY_SANS_SERIF,

    FONT_SIZE_BASE = REM,
    FONT_SIZE_BASE_SM = 0.875 * REM,
    FONT_SIZE_BASE_LG = 1.25 * REM,

    FONT_WEIGHT_LIGHT = '300',
    FONT_WEIGHT_NORMAL = '400',
    FONT_WEIGHT_BOLD = '700',

    FONT_WEIGHT_BASE = FONT_WEIGHT_NORMAL,
    LINE_HEIGHT_BASE = 1.5 * REM, // ???

    H1_FONT_SIZE = 2.5 * REM,
    H2_FONT_SIZE = 2 * REM,
    H3_FONT_SIZE = 1.75 * REM,
    H4_FONT_SIZE = 1.5 * REM,
    H5_FONT_SIZE = 1.25 * REM,
    H6_FONT_SIZE = 1 * REM,

    HEADINGS_MARGIN_BOTTOM = SPACER / 2 * REM,
    HEADINGS_FONT_FAMILY = FONT_FAMILY_BASE,
    HEADINGS_FONT_WEIGHT = FONT_WEIGHT_BASE,
    HEADINGS_COLOR = BODY_COLOR,

    TEXT_MUTED = GRAY_600,

    // Forms

    INPUT_BTN_PADDING_Y = 0.75 * REM,
    INPUT_BTN_PADDING_X = 1.5 * REM,
    INPUT_BTN_LINE_HEIGHT = LINE_HEIGHT_BASE,

    // $input-btn-focus-width:       .2rem !default;
    // $input-btn-focus-color:       rgba($component-active-bg, .25) !default;
    // $input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;

    // $input-btn-padding-y-sm:      .25rem !default;
    // $input-btn-padding-x-sm:      .5rem !default;
    // $input-btn-line-height-sm:    $line-height-sm !default;

    // $input-btn-padding-y-lg:      .5rem !default;
    // $input-btn-padding-x-lg:      1rem !default;
    // $input-btn-line-height-lg:    $line-height-lg !default;

    INPUT_BTN_BORDER_WIDTH = BORDER_WIDTH,

    // Buttons

    BTN_PADDING_Y = INPUT_BTN_PADDING_Y,
    BTN_PADDING_X = INPUT_BTN_PADDING_X,
    BTN_LINE_HEIGHT = INPUT_BTN_LINE_HEIGHT,

    // BTN_PADDING_Y_SM = INPUT_BTN_PADDING_Y_SM,
    // BTN_PADDING_X_SM = INPUT_BTN_PADDING_X_SM,
    // BTN_LINE_HEIGHT_SM = INPUT_BTN_LINE_HEIGHT_SM,

    // BTN_PADDING_Y_LG = INPUT_BTN_PADDING_Y_LG,
    // BTN_PADDING_X_LG = INPUT_BTN_PADDING_X_LG,
    // BTN_LINE_HEIGHT_LG = INPUT_BTN_LINE_HEIGHT_LG,

    BTN_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH,
    BTN_FONT_FAMILY = FONT_FAMILY_BASE,
    // BTN_FONT_WEIGHT = FONT_WEIGHT_NORMAL, // TODO: makes no sense?

    BTN_BORDER_RADIUS = BORDER_RADIUS,
    BTN_BORDER_RADIUS_LG = BORDER_RADIUS_LG,
    BTN_BORDER_RADIUS_SM = BORDER_RADIUS_SM,

    BTN_OUTLINE_BACKGROUND_COLOR = BODY_BG, // 'transparent'

    // Forms

    LABEL_MARGIN_BOTTOM = 0.5 * REM,

    INPUT_PADDING_Y = INPUT_BTN_PADDING_Y,
    INPUT_PADDING_X = INPUT_BTN_PADDING_X,
    INPUT_LINE_HEIGHT = INPUT_BTN_LINE_HEIGHT,

    // $input-padding-y-sm:                    $input-btn-padding-y-sm !default;
    // $input-padding-x-sm:                    $input-btn-padding-x-sm !default;
    // $input-line-height-sm:                  $input-btn-line-height-sm !default;

    // $input-padding-y-lg:                    $input-btn-padding-y-lg !default;
    // $input-padding-x-lg:                    $input-btn-padding-x-lg !default;
    // $input-line-height-lg:                  $input-btn-line-height-lg !default;

    INPUT_BG = WHITE,
    INPUT_DISABLED_BG = GRAY_200,

    INPUT_COLOR = GRAY_700,
    INPUT_BORDER_COLOR = GRAY_400,
    INPUT_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH,
    // $input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;

    INPUT_BORDER_RADIUS = BORDER_RADIUS,
    INPUT_BORDER_RADIUS_LG = BORDER_RADIUS_LG,
    INPUT_BORDER_RADIUS_SM = BORDER_RADIUS_SM,

    // $input-focus-bg:                        $input-bg !default;
    // $input-focus-border-color:              lighten($component-active-bg, 25%) !default;
    // $input-focus-color:                     $input-color !default;
    // $input-focus-width:                     $input-btn-focus-width !default;
    // $input-focus-box-shadow:                $input-btn-focus-box-shadow !default;

    INPUT_PLACEHOLDER_COLOR = GRAY_600,
    INPUT_PLAINTEXT_COLOR = BODY_COLOR,

    INPUT_HEIGHT_BORDER = INPUT_BORDER_WIDTH * 2,

    // $input-height-inner:                    ($font-size-base * $input-btn-line-height) + ($input-btn-padding-y * 2) !default;
    // $input-height:                          calc(#{$input-height-inner} + #{$input-height-border}) !default;

    // $input-height-inner-sm:                 ($font-size-sm * $input-btn-line-height-sm) + ($input-btn-padding-y-sm * 2) !default;
    // $input-height-sm:                       calc(#{$input-height-inner-sm} + #{$input-height-border}) !default;

    // $input-height-inner-lg:                 ($font-size-lg * $input-btn-line-height-lg) + ($input-btn-padding-y-lg * 2) !default;
    // $input-height-lg:                       calc(#{$input-height-inner-lg} + #{$input-height-border}) !default;

    // $input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

    // $form-text-margin-top:                  .25rem !default;

    // $form-check-input-gutter:               1.25rem !default;
    // $form-check-input-margin-y:             .3rem !default;
    // $form-check-input-margin-x:             .25rem !default;

    // $form-check-inline-margin-x:            .75rem !default;
    // $form-check-inline-input-margin-x:      .3125rem !default;

    // $form-group-margin-bottom:              1rem !default;

    // $input-group-addon-color:               $input-color !default;
    // $input-group-addon-bg:                  $gray-200 !default;
    // $input-group-addon-border-color:        $input-border-color !default;

    // Cards

    CARD_SPACER_Y = 0.75 * SPACER * REM,
    CARD_SPACER_X = 1.25 * SPACER * REM,
    CARD_BORDER_WIDTH = BORDER_WIDTH,
    CARD_BORDER_RADIUS = BORDER_RADIUS,
    CARD_BORDER_COLOR = BORDER_COLOR, // rgba($black, .125)
    CARD_INNER_BORDER_RADIUS = CARD_BORDER_RADIUS - CARD_BORDER_WIDTH,
    CARD_CAP_BG = GRAY_100, // rgba($black, .03)
    CARD_BG = WHITE,

    CARD_SHADOW_COLOR = SHADOW_COLOR,
    CARD_SHADOW_OPACITY = SHADOW_OPACITY,
    CARD_SHADOW_OFFSET = SHADOW_OFFSET,
    CARD_SHADOW_RADIUS = CARD_BORDER_RADIUS,

    // $card-img-overlay-padding:          1.25rem !default;

    // $card-group-margin:                 ($grid-gutter-width / 2) !default;
    // $card-deck-margin:                  $card-group-margin !default;

    // $card-columns-count:                3 !default;
    // $card-columns-gap:                  1.25rem !default;
    // $card-columns-margin:               $card-spacer-y !default;

    // Modals

    MODAL_INNER_PADDING = 1 * SPACER * REM,

    MODAL_DIALOG_MARGIN = 1 * SPACER * REM,
    // $modal-dialog-margin-y-sm-up: 30px !default;

    // $modal-title-line-height:     $line-height-base !default;

    MODAL_CONTENT_BG = WHITE,
    MODAL_CONTENT_BORDER_COLOR = 'transparent', // Color(BLACK).fate(0.2)
    MODAL_CONTENT_BORDER_WIDTH = 0, // BORDER_WIDTH,
    MODAL_CONTENT_BORDER_RADIUS = BORDER_RADIUS * 3, // BORDER_RADIUS_LG,

    MODAL_CONTENT_SHADOW_COLOR = SHADOW_COLOR,
    MODAL_CONTENT_SHADOW_OPACITY = SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_OFFSET = {width: SHADOW_OFFSET.width * 2, height: SHADOW_OFFSET.height * 2},
    MODAL_CONTENT_SHADOW_RADIUS = MODAL_CONTENT_BORDER_RADIUS,
    // $modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;
    // $modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;

    MODAL_BACKDROP_BG = BLACK,
    MODAL_BACKDROP_OPACITY = 0.5, // for compatibilty
    // $modal-header-border-color:         $gray-200 !default;
    // $modal-footer-border-color:         $modal-header-border-color !default;
    // $modal-header-border-width:         $modal-content-border-width !default;
    // $modal-footer-border-width:         $modal-header-border-width !default;
    // $modal-header-padding:              1rem !default;

    // $modal-lg:                    800px !default;
    // $modal-md:                    500px !default;
    // $modal-sm:                    300px !default;

    // $modal-transition:            transform .3s ease-out !default;

    // Progress bars

    PROGRESS_HEIGHT = 1 * REM,
    PROGRESS_FONT_SIZE = 0.75 * FONT_SIZE_BASE,
    PROGRESS_BG = GRAY_200,
    PROGRESS_BORDER_RADIUS = BORDER_RADIUS,
    PROGRESS_BOX_SHADOW_COLOR = SHADOW_COLOR,
    PROGRESS_BOX_SHADOW_OFFSET = SHADOW_OFFSET,
    PROGRESS_BOX_SHADOW_OPACITY = 0.5 * SHADOW_OPACITY, // 0.1
    PROGRESS_BOX_SHADOW_RADIUS = PROGRESS_BORDER_RADIUS,
    PROGRESS_BAR_COLOR = WHITE,
    PROGRESS_BAR_BG = PRIMARY,
    PROGRESS_BAR_ANIMATION_TIMING = 'placeholder', // 1s linear infinite !default;
    PROGRESS_BAR_TRANSITION = 'placeholder', // width .6s ease !default;

  } = constants || {};

  return {
    ENABLE_ROUNDED, ENABLE_SHADOWS, ENABLE_GRID_CLASSES,

    REM,
    SPACER, SPACERS, SIZES,
    GRID_BREAKPOINTS, GRID_BREAKPOINTS_HORIZONTAL, GRID_BREAKPOINTS_VERTICAL,

    WHITE, BLACK,
    BLUE, CYAN, RED, YELLOW, GREEN,
    GRAY_900, GRAY_800, GRAY_700, GRAY_600, GRAY_500, GRAY_400, GRAY_300, GRAY_200, GRAY_100,
    PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, LIGHT, DARK,
    THEME_COLORS, THEME_COLOR_INTERVAL,
    BODY_BG, BODY_COLOR, LINK_COLOR, LINK_DECORATION,

    GRID_COLUMNS, GRID_GUTTER_WIDTH,
    LINE_HEIGHT_LG, LINE_HEIGHT_SM,
    BORDER_WIDTH, BORDER_COLOR, BORDER_RADIUS, BORDER_RADIUS_LG, BORDER_RADIUS_SM,
    SHADOW_COLOR, SHADOW_OPACITY, SHADOW_OFFSET,

    FONT_FAMILY_SANS_SERIF, FONT_FAMILY_MONOSPACE,
    FONT_FAMILY_BASE, FONT_FAMILY_BASE_LIGHT, FONT_FAMILY_BASE_BOLD,
    FONT_SIZE_BASE, FONT_SIZE_BASE_SM, FONT_SIZE_BASE_LG,
    FONT_WEIGHT_LIGHT, FONT_WEIGHT_NORMAL, FONT_WEIGHT_BOLD,
    FONT_WEIGHT_BASE, LINE_HEIGHT_BASE,
    H1_FONT_SIZE, H2_FONT_SIZE, H3_FONT_SIZE, H4_FONT_SIZE, H5_FONT_SIZE, H6_FONT_SIZE,
    HEADINGS_MARGIN_BOTTOM, HEADINGS_FONT_FAMILY, HEADINGS_FONT_WEIGHT, HEADINGS_COLOR,
    TEXT_MUTED,

    INPUT_BTN_PADDING_Y, INPUT_BTN_PADDING_X, INPUT_BTN_LINE_HEIGHT, INPUT_BTN_BORDER_WIDTH,
    BTN_PADDING_Y, BTN_PADDING_X, BTN_LINE_HEIGHT,
    BTN_BORDER_WIDTH, BTN_FONT_FAMILY,
    BTN_BORDER_RADIUS, BTN_BORDER_RADIUS_LG, BTN_BORDER_RADIUS_SM,

    LABEL_MARGIN_BOTTOM, INPUT_PADDING_Y, INPUT_PADDING_X, INPUT_LINE_HEIGHT,
    INPUT_BG, INPUT_DISABLED_BG, INPUT_COLOR,
    INPUT_BORDER_COLOR, INPUT_BORDER_WIDTH,
    INPUT_BORDER_RADIUS, INPUT_BORDER_RADIUS_LG, INPUT_BORDER_RADIUS_SM,
    INPUT_PLACEHOLDER_COLOR, INPUT_PLAINTEXT_COLOR, INPUT_HEIGHT_BORDER,

    CARD_SPACER_Y, CARD_SPACER_X,
    CARD_BORDER_WIDTH, CARD_BORDER_RADIUS, CARD_BORDER_COLOR,
    CARD_INNER_BORDER_RADIUS, CARD_CAP_BG, CARD_BG,
    CARD_SHADOW_COLOR, CARD_SHADOW_OPACITY, CARD_SHADOW_OFFSET, CARD_SHADOW_RADIUS,

    MODAL_INNER_PADDING, MODAL_DIALOG_MARGIN,

    MODAL_CONTENT_BG, MODAL_CONTENT_BORDER_COLOR,
    MODAL_CONTENT_BORDER_WIDTH, MODAL_CONTENT_BORDER_RADIUS,
    MODAL_CONTENT_SHADOW_COLOR, MODAL_CONTENT_SHADOW_OPACITY,
    MODAL_CONTENT_SHADOW_OFFSET, MODAL_CONTENT_SHADOW_RADIUS,
    MODAL_BACKDROP_BG, MODAL_BACKDROP_OPACITY,

    PROGRESS_HEIGHT, PROGRESS_FONT_SIZE, PROGRESS_BG, PROGRESS_BORDER_RADIUS,
    PROGRESS_BOX_SHADOW_COLOR, PROGRESS_BOX_SHADOW_OFFSET,
    PROGRESS_BOX_SHADOW_OPACITY, PROGRESS_BOX_SHADOW_RADIUS,
    PROGRESS_BAR_COLOR, PROGRESS_BAR_BG,
    PROGRESS_BAR_ANIMATION_TIMING, PROGRESS_BAR_TRANSITION,
  };
};
