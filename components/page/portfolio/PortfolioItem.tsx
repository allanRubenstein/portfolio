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
  portfolioItem: PortfolioItem;
  headerImage?: ImageInterface;
  images?: ImageInterface[];
  description?: string[];
  portfolioLink?: string;
}

export interface PortfolioItem {
  name: string;
}

const PortfolioItem = ({ portfolioItem }: PortfolioItemProps): JSX.Element => {
  return (
    <Page
      pageTitle={`${portfolioItem.name}`}
      mainPageHeaderText={`${portfolioItem.name}`}
    >
      <MainWrap>
        {/* <GenericImage /> */}
        {/* TODO: add description here */}
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

export default PortfolioItem;
