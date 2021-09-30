export interface LinkButtonProps {
  children?: any;
  href?: string;
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'offset';
}
