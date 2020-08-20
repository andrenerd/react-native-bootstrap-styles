import { mixinBorderRadius } from './border-radius';
import { colorYiq } from './helpers';

export const mixinButtonSize = (
  constants,
  paddingY,
  paddingX,
  fontSize,
  lineHeight,
  borderRadius,
) => (Object.assign({
  paddingHorizontal: paddingX,
  paddingVertical: paddingY,
  // don't add / fontSize: fontSize,
  // reserved / lineHeight: lineHeight,
},
  mixinBorderRadius(constants, borderRadius),
));

export const mixinButtonVariant = (
  constants,
  backgroundColor,
  borderColor,
  // hoverBackground,
  // hoverColor,
  // activeBackground,
  // activeBorder,
) => ({
  // see mixinButtonVariantText / color: color-yiq($background);
  backgroundColor: backgroundColor,
  borderColor: borderColor,

  // @include gradient-bg($background);

  // @include hover {
  //   color: color-yiq($hover-background);
  //   @include gradient-bg($hover-background);
  //   border-color: $hover-border;
  // }

  // &:focus,
  // &.focus {
  //   // Avoid using mixin so we can pass custom focus shadow properly
  //   @if $enable-shadows {
  //     box-shadow: $btn-box-shadow, 0 0 0 $btn-focus-width rgba($border, .5);
  //   } @else {
  //     box-shadow: 0 0 0 $btn-focus-width rgba($border, .5);
  //   }
  // }

  // &:not(:disabled):not(.disabled):active,
  // &:not(:disabled):not(.disabled).active,
  // .show > &.dropdown-toggle {
  //   color: color-yiq($active-background);
  //   background-color: $active-background;
  //   @if $enable-gradients {
  //     background-image: none; // Remove the gradient for the pressed/active state
  //   }
  //   border-color: $active-border;

  //   &:focus {
  //     // Avoid using mixin so we can pass custom focus shadow properly
  //     @if $enable-shadows {
  //       box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($border, .5);
  //     } @else {
  //       box-shadow: 0 0 0 $btn-focus-width rgba($border, .5);
  //     }
  //   }
  // }
});

export const mixinButtonVariantText = (
  constants,
  backgroundColor,
) => ({
  color: colorYiq(constants, backgroundColor),
});

export const mixinButtonVariantDisabled = (
  constants,
  backgroundColor,
  borderColor,
) => ({
  // see mixinButtonVariantText / color: color-yiq($background);
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  // reserved
  // // Remove CSS gradients if they're enabled
  // @if $enable-gradients {
  //   background-image: none;
  // }
});

export const mixinButtonVariantDisabledText = mixinButtonVariantText;

export const mixinButtonOutlineVariant = (
  constants,
  color,
  // colorHover,
  // activeBackground,
  // activeBorder,
) => ({
  // see mixinButtonOutlineVariantText / color: color;
  borderColor: color,

  // &:hover {
  //   color: $color-hover;
  //   background-color: $active-background;
  //   border-color: $active-border;
  // }

  // &:focus,
  // &.focus {
  //   box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
  // }

  // &:not(:disabled):not(.disabled):active,
  // &:not(:disabled):not(.disabled).active,
  // .show > &.dropdown-toggle {
  //   color: color-yiq($active-background);
  //   background-color: $active-background;
  //   border-color: $active-border;

  //   &:focus {
  //     // Avoid using mixin so we can pass custom focus shadow properly
  //     @if $enable-shadows and $btn-active-box-shadow != none {
  //       box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5);
  //     } @else {
  //       box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
  //     }
  //   }
  // }
});

export const mixinButtonOutlineVariantText = (
  constants,
  color,
) => ({
  color: color,
});

export const mixinButtonOutlineVariantDisabled = (
  constants,
) => ({
  backgroundColor: 'transparent',
});

export const mixinButtonOutlineVariantDisabledText = (
  constants,
  color,
) => ({
  color: color,
});
