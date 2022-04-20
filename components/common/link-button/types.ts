import { Colors } from '../../typography/types';

export type LinkButtonProps =
  | UniversalLinkButtonProps
  | SecondaryLinkButtonProps
  | TertiaryLinkButtonProps;

export interface UniversalLinkButtonProps {
  children?: any;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  fontSize?: number;
  // variants that don't need special props go here below
  variant?: 'primary' | 'offset';
}

// secondary variant can have a colors prop
export interface SecondaryLinkButtonProps
  extends Omit<UniversalLinkButtonProps, 'variant'> {
  variant: 'secondary' | 'secondary-offset';
  // props with '$' are called transient props
  fontColor?: Colors;
  $backgroundColor?: Colors;
}

// tertiary variant can have a colors prop
export interface TertiaryLinkButtonProps
  extends Omit<UniversalLinkButtonProps, 'variant'> {
  variant: 'tertiary';
  fontColor?: Colors;
}
