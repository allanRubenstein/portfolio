import Head from 'next/head';
import React from 'react';
import PageMainHeader from '../typography/page-main-header/PageMainHeader';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../util/constants';

export interface PageProps {
  pageTitle: string;
  mainPageHeaderText?: string;
  children?: React.ReactNode;
}

const Page = ({
  pageTitle,
  children,
  mainPageHeaderText,
}: PageProps): JSX.Element => {
  return (
    <PageWrap>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* 
        // TODO: set up nav skip here
      */}
      {mainPageHeaderText && (
        <MainPageHeader>{mainPageHeaderText}</MainPageHeader>
      )}
      {children}
    </PageWrap>
  );
};

const PageWrap = styled.div`
  padding: 3rem 3rem;
  max-width: 1440px;
  margin: auto;
  text-align: center;
  @media (min-width: ${BREAKPOINTS.medium}px) {
    padding: 4rem 3rem;
  }
`;
const MainPageHeader = styled(PageMainHeader)`
  margin: 0rem 0 3rem;
  @media (min-width: ${BREAKPOINTS.medium}px) {
    margin: 0rem 0 4rem;
  }
`;
export default Page;
