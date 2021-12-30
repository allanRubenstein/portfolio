import { Colors } from '../typography/types';

export type LinkButtonProps =
  | UniversalLinkButtonProps
  | SecondaryLinkButtonProps;

export interface UniversalLinkButtonProps {
  children?: any;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  // variants that don't need special props go here below
  variant?: 'primary' | 'offset';
}

// secondary variant can have a colors prop
export interface SecondaryLinkButtonProps
  extends Omit<UniversalLinkButtonProps, 'variant'> {
  variant: 'secondary';
  $color?: Colors;
}
