import Head from 'next/head';
import React from 'react';

export interface PageProps {
  pageTitle: string;
  children?: React.ReactNode;
}

const Page = ({ pageTitle, children }: PageProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* 
        // TODO: set up nav skip here
      */}

      {children}
    </div>
  );
};

export default Page;
