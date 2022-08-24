import PrimaryNav from '../../primary-nav/PrimaryNav';
import React from 'react';
import Footer from '../../footer/Footer';

const StoriesApp = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const mainDivId = 'main';
  return (
    <>
      <PrimaryNav
        mainId={mainDivId}
        links={[
          {
            text: 'home',
            href: '/',
          },
          {
            text: 'about',
            href: '/about',
          },
          {
            text: 'portfolio',
            href: '/portfolio',
          },
          {
            text: 'contact',
            href: '/contact',
          },
        ]}
      ></PrimaryNav>
      <main id={mainDivId} tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default StoriesApp;
