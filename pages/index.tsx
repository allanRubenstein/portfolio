import styled from 'styled-components';
import Page from '../components/page/Page';
import { Title } from '../components/typography/Title';
import LinkButton from '../components/common/link-button/LinkButton';
import { ColorsEnum } from '../components/typography/types';
import { BREAKPOINTS } from '../util/constants';

const Home = (): JSX.Element => {
  return (
    <Page pageTitle="Allan Rubenstein - Home Page">
      <MainWrap>
        <div>
          <TitleWrap>
            <StyledTitle $isBold={true} $fontSize={5} $desktopFontSize={8}>
              Allan Rubenstein
            </StyledTitle>
            <StyledTitle
              $textTransform="none"
              $isBold={false}
              $fontSize={3}
              $desktopFontSize={5}
            >
              {`(roo-ben-steen)`}
            </StyledTitle>
          </TitleWrap>
          <ButtonGroup>
            <LinkButton variant="offset" href="/portfolio/web-dev">
              Web Development
            </LinkButton>
            <LinkButton href="/portfolio/graphic-design">
              Graphic Design
            </LinkButton>
            <LinkButton href="/portfolio/photography">Photography</LinkButton>
          </ButtonGroup>
        </div>
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  min-height: 80vh;
  /* background-color: var(${ColorsEnum.gray}); */
  @media (min-width: ${BREAKPOINTS.small}px) {
    padding: 10rem 2rem;
  }
`;
const TitleWrap = styled.h1`
  margin-bottom: 5rem;
`;
const StyledTitle = styled(Title)`
  display: block;
  margin-bottom: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  /* column-gap: 2rem; */
  grid-gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  @media (min-width: ${BREAKPOINTS.medium}px) {
    grid-auto-flow: column;
  }
`;

export default Home;
