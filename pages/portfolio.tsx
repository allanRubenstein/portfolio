import styled from 'styled-components';
import Page from '../components/page/Page';
import { Title } from '../components/typography/Title';
import LinkButton from '../components/common/link-button/LinkButton';
import { ColorsEnum } from '../components/typography/types';
import { BREAKPOINTS } from '../util/constants';
import PageTitle from '../components/typography/page-main-header/PageMainHeader';
import PortfolioCard from '../components/portfolio-card/PortfolioCard';

const Portfolio = (): JSX.Element => {
  return (
    <Page
      pageTitle="Allan Rubenstein - Portfolio"
      mainPageHeaderText="Portfolio"
    >
      <MainWrap>
        <PortfolioResultsGrid>
          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />

          <PortfolioCard
            href="#testHref"
            image={{
              src: 'https://placekitten.com/500/300',
              alt: 'CAT ALT TEXT WOO',
            }}
          />
        </PortfolioResultsGrid>
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

const PortfolioResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  @media (min-width: ${BREAKPOINTS.small}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${BREAKPOINTS.large}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Portfolio;
