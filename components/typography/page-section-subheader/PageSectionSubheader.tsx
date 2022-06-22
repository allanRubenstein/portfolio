import React from 'react';
import { Title } from '../Title';

export interface PageSectionSubheaderProps {
  children?: React.ReactNode;
  className?: string;
  asElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const PageSectionSubheader = ({
  children,
  className,
  asElement = 'h2',
}: PageSectionSubheaderProps): JSX.Element => {
  return (
    <Title
      $fontSize={4}
      $desktopFontSize={5}
      $fontColor={'--black'}
      $isBold
      as={asElement}
      className={className}
    >
      {children}
    </Title>
  );
};

export default PageSectionSubheader;
