import styled from 'styled-components';
import Page from '../../../components/page/Page';
import { Title } from '../../../components/typography/Title';
import LinkButton from '../../../components/common/link-button/LinkButton';
import { ColorsEnum } from '../../../components/typography/types';
import { BREAKPOINTS } from '../../../util/constants';
import PageTitle from '../../../components/typography/page-main-header/PageMainHeader';
import PortfolioCard from '../../../components/portfolio-card/PortfolioCard';
import { ImageInterface } from '../../common/common';
import Image from '../../common/image/GenericImage';
import GenericImage from '../../common/image/GenericImage';

export interface PortfolioItemProps {
  portfolioTextAndImages: PortfolioItemTextAndImage[];
  // headerImage?: PortfolioItemImage[];
  // images?: ImageInterface[];
  // description?: string[];
  // portfolioLink?: string;
  name: string;
}

export interface PortfolioItemImage extends ImageInterface {
  caption?: string;
}
export interface PortfolioItemTextAndImage {
  bodyCopyParagraphs?: string[];
  images: PortfolioItemImage[];
}

const PortfolioItem = ({
  name,
  portfolioTextAndImages,
}: PortfolioItemProps): JSX.Element => {
  return (
    <Page pageTitle={`${name}`} mainPageHeaderText={`${name}`}>
      <MainWrap>
        {/* <GenericImage /> */}
        {/* TODO: add description here */}
        {portfolioTextAndImages.map((portfolioTextAndImage) => {
          return (
            <PortfolioTextAndImageWrap
              // TODO: src for key ok?
              key={portfolioTextAndImage.images[0].src}
            >
              <LeftWrap>{'test'}</LeftWrap>
              <RightWrap>{'test'}</RightWrap>
            </PortfolioTextAndImageWrap>
          );
        })}
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

const PortfolioTextAndImageWrap = styled.div``;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;

export default PortfolioItem;
