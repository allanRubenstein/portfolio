import styled from 'styled-components';
import Page from '../../components/page/Page';
import { Title } from '../../components/typography/Title';
import LinkButton from '../../components/common/link-button/LinkButton';
import { ColorsEnum } from '../../components/typography/types';
import { BREAKPOINTS } from '../../util/constants';
import PageTitle from '../../components/typography/page-main-header/PageMainHeader';
import PortfolioCard, {
  PortfolioCardProps,
} from '../../components/portfolio-card/PortfolioCard';
import PageSectionSubheader from '../../components/typography/page-section-subheader/PageSectionSubheader';

const Portfolio = (): JSX.Element => {
  // TODO: make this props or hardcode

  const testItems: PortfolioCardProps[] = [
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
    {
      href: '#',
      image: {
        src: 'https://placekitten.com/500/300',
        alt: 'CAT ALT TEXT WOO',
      },
    },
  ];
  return (
    <Page
      pageTitle="Allan Rubenstein - Portfolio"
      mainPageHeaderText="Portfolio"
    >
      <MainWrap>
        <PortfolioSection>
          <StyledPageSectionSubheader>Web</StyledPageSectionSubheader>
          <PortfolioResultsGrid>
            {/* 
            // TODO: loop through real items eventually 
          */}
            {testItems.map((portfolioItem) => {
              return (
                <li key={portfolioItem.href}>
                  <PortfolioCard
                    href="#testHref"
                    image={{
                      src: 'https://placekitten.com/500/300',
                      alt: 'CAT ALT TEXT WOO',
                    }}
                  />
                </li>
              );
            })}
          </PortfolioResultsGrid>
        </PortfolioSection>
        <PortfolioSection>
          <StyledPageSectionSubheader>
            Graphic Design
          </StyledPageSectionSubheader>
          <PortfolioResultsGrid>
            {/* 
            // TODO: loop through real items eventually 
          */}
            {testItems.map((portfolioItem) => {
              return (
                <li key={portfolioItem.href}>
                  <PortfolioCard
                    href="#testHref"
                    image={{
                      src: 'https://placekitten.com/500/300',
                      alt: 'CAT ALT TEXT WOO',
                    }}
                  />
                </li>
              );
            })}
          </PortfolioResultsGrid>
        </PortfolioSection>
        <PortfolioSection>
          <StyledPageSectionSubheader>Photography</StyledPageSectionSubheader>
          <PortfolioResultsGrid>
            {/* 
            // TODO: loop through real items eventually 
          */}
            {testItems.map((portfolioItem) => {
              return (
                <li key={portfolioItem.href}>
                  <PortfolioCard
                    href="#testHref"
                    image={{
                      src: 'https://placekitten.com/500/300',
                      alt: 'CAT ALT TEXT WOO',
                    }}
                  />
                </li>
              );
            })}
          </PortfolioResultsGrid>
        </PortfolioSection>
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

const PortfolioSection = styled.section`
  margin-bottom: 10rem;
`;
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
  padding: 0 0 0.5rem;
  margin: 1rem 0 2rem;

  @media (min-width: ${BREAKPOINTS.medium}px) {
    padding: 0 0 1rem;
    margin: 2rem 0 3rem;
  }
  text-align: left;
  border-bottom: 1px solid var(${ColorsEnum.gray});
`;

export default Portfolio;
