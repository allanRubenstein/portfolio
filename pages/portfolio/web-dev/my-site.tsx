import React from 'react';
import PortfolioItem, {
  PortfolioItemProps,
} from '../../../components/page/portfolio/PortfolioItem';

const mySiteProps: PortfolioItemProps = {
  name: 'My Site',
  portfolioTextAndImages: [
    {
      bodyCopyParagraphs: [
        'This site was built with Next.js, TypeScript, and Styled Components.',
      ],
      images: [
        {
          src: '/images/portfolio/web-dev/my-site/site-screenshot.png',
          alt: 'Home page of my site.',
        },
      ],
    },
  ],
};

const MySite = (): JSX.Element => {
  return <PortfolioItem {...mySiteProps} />;
};

export default MySite;
