export interface TypographyProps {
  $fontSize: number;
  $desktopFontSize?: number;
}

export interface TitleTypographyProps extends TypographyProps {
  $isBold?: boolean;
}
