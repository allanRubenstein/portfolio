import PrimaryNav from '../primary-nav/PrimaryNav';
import React from 'react';
import Footer from '../footer/Footer';

const StoriesApp = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <PrimaryNav
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
      {children}
      <Footer />
    </>
  );
};

export default StoriesApp;
