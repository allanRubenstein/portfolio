export interface TypographyProps {
  // these are transient props, indicated by the '$'
  $fontSize: number;
  $desktopFontSize?: number;
}

export interface TitleTypographyProps extends TypographyProps {
  $isBold?: boolean;
}
