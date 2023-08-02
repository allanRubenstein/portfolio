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
import { NAV_HEIGHTS } from '../../components/primary-nav/PrimaryNav';

export interface PortfolioProps {
  web?: PortfolioCardProps[];
  graphicDesign?: PortfolioCardProps[];
  photography?: PortfolioCardProps[];
}

// TODO: make this props or hardcode

// TODO: TEST ITEMS TO ADD
// what's up marysville, cultured swine
// abercrombie, WT
// photography

const hardcodedWebProps: PortfolioCardProps[] = [
  {
    title: 'My Site',
    href: '/portfolio/web-dev/my-site',
    image: {
      src: '/images/portfolio/web-dev/my-site/site-screenshot.png',
      alt: 'CAT ALT TEXT WOO',
    },
  },
];

const Portfolio = ({
  // TODO: remove this hardcoded as default, do this some other way, maybe with static or serverside props
  web = hardcodedWebProps,
  graphicDesign,
  photography,
}: PortfolioProps): JSX.Element => {
  return (
    <Page
      pageTitle="Allan Rubenstein - Portfolio"
      mainPageHeaderText="Portfolio"
    >
      <MainWrap>
        {web && (
          <PortfolioSection>
            <StyledPageSectionSubheader>Web</StyledPageSectionSubheader>
            <PortfolioResultsGrid>
              {/* 
            // TODO: loop through real items eventually 
          */}
              {web?.map((webPortfolioItem) => {
                return (
                  <li key={webPortfolioItem.href}>
                    <PortfolioCard {...webPortfolioItem} />
                  </li>
                );
              })}
            </PortfolioResultsGrid>
          </PortfolioSection>
        )}

        {graphicDesign && (
          <PortfolioSection>
            <StyledPageSectionSubheader>
              Graphic Design
            </StyledPageSectionSubheader>
            <PortfolioResultsGrid>
              {/* 
            // TODO: loop through real items eventually 
          */}
              {graphicDesign?.map((graphicDesignPortfolioItem) => {
                return (
                  <li key={graphicDesignPortfolioItem.href}>
                    <PortfolioCard {...graphicDesignPortfolioItem} />
                  </li>
                );
              })}
            </PortfolioResultsGrid>
          </PortfolioSection>
        )}
        {photography && (
          <PortfolioSection>
            <StyledPageSectionSubheader>Photography</StyledPageSectionSubheader>
            <PortfolioResultsGrid>
              {/* 
            // TODO: loop through real items eventually 
          */}
              {photography?.map((photographyPortfolioItem) => {
                return (
                  <li key={photographyPortfolioItem.href}>
                    <PortfolioCard {...photographyPortfolioItem} />
                  </li>
                );
              })}
            </PortfolioResultsGrid>
          </PortfolioSection>
        )}
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
  margin-top: 1rem;
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
  position: sticky;
  top: ${NAV_HEIGHTS.default};
  background-color: var(${ColorsEnum.white});
  z-index: 1;

  /* this code below makes sure the images underneath and their hover box shadow don't show when sticky */
  &::before,
  &::after {
    position: absolute;
    content: '';
    background-color: var(${ColorsEnum.white});
    height: 100%;
    width: 1rem;
    top: 0;
  }
  &::before {
    right: 100%;
  }
  &::after {
    left: 100%;
  }

  padding: 1rem 0 0.5rem;
  /* margin: 1rem 0 2rem; */
  /* margin: 1rem 0 0rem; */

  @media (min-width: ${BREAKPOINTS.medium}px) {
    padding: 1rem 0 1rem;
    /* margin: 2rem 0 3rem; */
    top: ${NAV_HEIGHTS.medium};
  }
  text-align: left;
  border-bottom: 1px solid var(${ColorsEnum.gray});
`;

export default Portfolio;
