import styled from 'styled-components';
import Page from '../components/page/Page';
import { Title } from '../components/typography/Title';
import LinkButton from '../components/common/link-button/LinkButton';

const Home = (): JSX.Element => {
  return (
    <Page pageTitle="Allan Rubenstein - Home Page">
      <MainWrap>
        <div>
          <h1>
            <StyledTitle $isBold={true} $fontSize={8}>
              Allan Rubenstein
            </StyledTitle>
            <StyledTitle $textTransform="none" $isBold={false} $fontSize={5}>
              {`(roo-ben-steen)`}
            </StyledTitle>
          </h1>
          <div>
            <Title $fontSize={3} $isBold>
              Portfolio
            </Title>
            <LinkButton href="/portfolio/graphic-design">
              Graphic Design
            </LinkButton>
          </div>
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
  margin: 10rem 0;
  min-height: 60vh;
`;
const StyledTitle = styled(Title)`
  display: block;
`;

export default Home;
