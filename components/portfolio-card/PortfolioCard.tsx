import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ImageInterface } from '../common/common';
import Image from '../common/image/Image';
import { Title } from '../typography/Title';
import { ColorsEnum } from '../typography/types';

export interface PortfolioCardProps {
  image?: ImageInterface;
  href: string;
}

const PortfolioCard = ({ image, href }: PortfolioCardProps) => {
  return (
    <Link href={href} passHref>
      <MainWrapper>
        {/* 
          // TODO: make object-fit
        */}
        {image && <StyledImage src={image?.src} alt={image?.alt || ''} />}
        <StyledTitle $fontSize={3} $fontColor={'--black'} $isBold>
          Text Here
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
`;
const StyledImage = styled(Image)`
  transition: var(--transition);
`;
const MainWrapper = styled.a`
  position: relative;
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: var(${ColorsEnum.red});
    }

    ${StyledImage} {
      transform: scale(1.01);
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
