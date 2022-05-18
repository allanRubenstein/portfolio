import Head from 'next/head';
import React from 'react';
import PageMainHeader from '../typography/page-main-header/PageMainHeader';
import styled from 'styled-components';

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
  padding: 2rem 2rem;
  max-width: 1440px;
  margin: auto;
  text-align: center;
`;
const MainPageHeader = styled(PageMainHeader)`
  /* padding: 5rem 2rem; */
`;
export default Page;
