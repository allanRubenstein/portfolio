import styled, { css } from 'styled-components';
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
import { NAV_HEIGHTS_OFFSET_STYLES } from '../../primary-nav/PrimaryNav';

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
              <LeftWrap>
                <LeftInnerWrap>test</LeftInnerWrap>
              </LeftWrap>
              <RightWrap>
                {portfolioTextAndImage.images.map((image, index) => {
                  return (
                    <StyledImage
                      key={`${image.src}-${index}`}
                      {...image}
                      alt={image.alt || ''}
                    />
                  );
                })}
              </RightWrap>
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

const PortfolioTextAndImageWrap = styled.div`
  display: flex;
`;

const LeftAndRightStyles = css`
  flex: 1 1 50%;
`;
const LeftWrap = styled.div`
  ${LeftAndRightStyles}
`;
const RightWrap = styled.div`
  ${LeftAndRightStyles}
`;

const InnerWrapStyles = css`
  position: sticky;
  top: 300px;
  ${NAV_HEIGHTS_OFFSET_STYLES}
`;

const LeftInnerWrap = styled.div`
  ${InnerWrapStyles}
`;

const StyledImage = styled(GenericImage)`
  width: 100%;
`;

export default PortfolioItem;
