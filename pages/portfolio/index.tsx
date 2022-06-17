import styled from 'styled-components';
import Page from '../../components/page/Page';
import { Title } from '../../components/typography/Title';
import LinkButton from '../../components/common/link-button/LinkButton';
import { ColorsEnum } from '../../components/typography/types';
import { BREAKPOINTS } from '../../util/constants';
import PageTitle from '../../components/typography/page-main-header/PageMainHeader';
import PortfolioCard from '../../components/portfolio-card/PortfolioCard';
import PageSectionSubheader from '../../components/typography/page-section-subheader/PageSectionSubheader';

const Portfolio = (): JSX.Element => {
  return (
    <Page
      pageTitle="Allan Rubenstein - Portfolio"
      mainPageHeaderText="Portfolio"
    >
      <MainWrap>
        <PortfolioSection>
          <StyledPageSectionSubheader>Web</StyledPageSectionSubheader>
          <PortfolioResultsGrid>
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>

            {/* 
            // TODO: loop through this eventually 
          */}
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>
            <li>
              <PortfolioCard
                href="#testHref"
                image={{
                  src: 'https://placekitten.com/500/300',
                  alt: 'CAT ALT TEXT WOO',
                }}
              />
            </li>
          </PortfolioResultsGrid>
        </PortfolioSection>
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

const PortfolioSection = styled.section``;
const PortfolioResultsGrid = styled.ol`
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

const StyledPageSectionSubheader = styled(PageSectionSubheader)`
  margin: 2rem 0;
  text-align: left;
`;

export default Portfolio;
