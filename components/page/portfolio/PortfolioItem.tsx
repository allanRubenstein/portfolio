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
import { navHeightsOffsetStyles } from '../../primary-nav/PrimaryNav';
import { Paragraph } from '../../typography/Paragraph';
import { minWidthMediaQuery } from '../../css/styled-components-global-css';

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
                <InnerWrap>
                  {portfolioTextAndImage.bodyCopyParagraphs?.map(
                    (paragraph) => {
                      return (
                        <Paragraph includeDefaultMargins key={paragraph}>
                          {paragraph}
                        </Paragraph>
                      );
                    },
                  )}
                </InnerWrap>
              </LeftWrap>
              <RightWrap>
                <InnerWrap>
                  {portfolioTextAndImage.images.map((image, index) => {
                    return (
                      <StyledImage
                        key={`${image.src}-${index}`}
                        {...image}
                        alt={image.alt || ''}
                      />
                    );
                  })}
                </InnerWrap>
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
  flex-wrap: wrap-reverse;
  gap: 2rem;
  margin-bottom: 4rem;

  ${minWidthMediaQuery(
    'medium',
    css`
      flex-wrap: nowrap;
    `,
  )}
`;

const LeftAndRightStyles = css`
  flex: 1 1 100%;
  /* margin: 0 0 2rem 0; */

  ${minWidthMediaQuery(
    'medium',
    css`
      flex: 1 1 50%;
    `,
  )}
`;
const LeftWrap = styled.div`
  ${LeftAndRightStyles}
  text-align: left;
  /* padding: 0 2rem 0 0; */
`;
const RightWrap = styled.div`
  ${LeftAndRightStyles}
`;

const InnerWrapStyles = css`
  /* top: 300px; */
  ${navHeightsOffsetStyles(2)}
  ${minWidthMediaQuery(
    'medium',
    css`
      position: sticky;
    `,
  )}
`;

const InnerWrap = styled.div`
  ${InnerWrapStyles}
`;

const StyledImage = styled(GenericImage)`
  width: 100%;
`;

export default PortfolioItem;
