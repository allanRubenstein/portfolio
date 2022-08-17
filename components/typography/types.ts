export interface TypographyProps {
  // these are transient props, indicated by the '$'
  $fontSize: number;
  $desktopFontSize?: number;
  $fontColor?: Colors;
  className?: string;
}

// match css color variables
export type Colors =
  | '--red-light'
  | '--red'
  | '--red-dark'
  | '--white'
  | '--black'
  | '--gray';

// match Colors and css color variables
export enum ColorsEnum {
  redLight = '--red-light',
  red = '--red',
  redDark = '--red-dark',
  white = '--white',
  black = '--black',
  gray = '--gray',
}

export interface TitleTypographyProps extends TypographyProps {
  $isBold?: boolean;
  $hasTextShadow?: boolean;
  $textTransform?: 'none' | 'uppercase';
}
