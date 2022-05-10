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
            href: '#',
          },
          {
            text: 'about',
            href: '#',
          },
          {
            text: 'portfolio',
            href: '#',
          },
          {
            text: 'contact',
            href: '#',
          },
        ]}
      ></PrimaryNav>
      {children}
      <Footer />
    </>
  );
};

export default StoriesApp;
