import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ImageInterface } from '../common/common';
import { Title } from '../typography/Title';
import { ColorsEnum } from '../typography/types';
import { BoxShadow } from '../css/styled-components-global-css';
import GenericImage from '../common/image/GenericImage';

export interface PortfolioCardProps {
  image?: ImageInterface;
  href: string;
  title: string;
}

const PortfolioCard = ({
  image,
  href,
  title,
}: PortfolioCardProps): JSX.Element => {
  return (
    <Link href={href} passHref legacyBehavior>
      <MainWrapper>
        {/* 
          // TODO: make object-fit
        */}
        {image && <StyledImage src={image?.src} alt={image?.alt || ''} />}
        <StyledTitle $fontSize={3} $fontColor={'--black'} $isBold>
          {title}
        </StyledTitle>
      </MainWrapper>
    </Link>
  );
};

export default PortfolioCard;

const StyledTitle = styled(Title)`
  padding: 1rem 0 0;
  display: block;
  transition: var(--transition);
  text-align: left;
`;
const StyledImage = styled(GenericImage)`
  transition: var(--transition);
  width: 100%;
`;
const MainWrapper = styled.a`
  position: relative;
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: var(${ColorsEnum.red});
    }

    ${StyledImage} {
      /* transform: scale(1.01); */
      transform: translateY(-0.3rem);
      ${BoxShadow}
    }
  }
`;

const TitleWrapper = styled.div`
  padding: 0 2rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
