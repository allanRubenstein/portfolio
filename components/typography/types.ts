export interface TypographyProps {
  // these are transient props, indicated by the '$'
  $fontSize: number;
  $desktopFontSize?: number;
  $color?: '--red-light' | '--red' | '--red-dark' | '--white' | '--black'; // match css color variables
}

export interface TitleTypographyProps extends TypographyProps {
  $isBold?: boolean;
  $hasTextShadow?: boolean;
}
