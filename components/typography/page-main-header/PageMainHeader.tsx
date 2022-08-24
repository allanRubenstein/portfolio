import React from 'react';
import { Title } from '../Title';

export interface PageMainHeaderProps {
  children?: React.ReactNode;
  className?: string;
  asElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const PageMainHeader = ({
  children,
  className,
  asElement = 'h1',
}: PageMainHeaderProps): JSX.Element => {
  return (
    <Title
      $fontSize={5}
      $desktopFontSize={8}
      $fontColor={'--black'}
      $isBold
      as={asElement}
      className={className}
    >
      {children}
    </Title>
  );
};

export default PageMainHeader;
