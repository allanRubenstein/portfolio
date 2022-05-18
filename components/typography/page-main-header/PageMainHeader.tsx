import React from 'react';
import { Title } from '../Title';

export interface PageMainHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const PageMainHeader = ({
  children,
  className,
}: PageMainHeaderProps): JSX.Element => {
  return (
    <Title
      $fontSize={5}
      $desktopFontSize={8}
      $fontColor={'--black'}
      $isBold
      as={'h1'}
      className={className}
    >
      {children}
    </Title>
  );
};

export default PageMainHeader;
