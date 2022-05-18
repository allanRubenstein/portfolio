import styled from 'styled-components';
import Page from '../components/page/Page';
import { Title } from '../components/typography/Title';
import LinkButton from '../components/common/link-button/LinkButton';
import { ColorsEnum } from '../components/typography/types';
import { BREAKPOINTS } from '../util/constants';
import PageTitle from '../components/typography/page-main-header/PageMainHeader';

const Portfolio = (): JSX.Element => {
  return (
    <Page
      pageTitle="Allan Rubenstein - Portfolio"
      mainPageHeaderText="Portfolio"
    >
      <MainWrap>test</MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
`;

export default Portfolio;
