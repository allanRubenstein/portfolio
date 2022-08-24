import React from 'react';
import { Story } from '@storybook/react';
import PortfolioCard from './PortfolioCard';
import { PortfolioCardProps } from './PortfolioCard';

export default {
  component: PortfolioCard,
  title: 'Components/PortfolioCard',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story: any) => {
      return <div style={{ maxWidth: '400px', width: '100%' }}>{story()}</div>;
    },
  ],
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<PortfolioCardProps> = (args: PortfolioCardProps) => (
  <PortfolioCard {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<PortfolioCardProps> = Template.bind({});
Default.args = {
  image: {
    src: 'https://placekitten.com/500/300',
    alt: 'CAT ALT TEXT WOO',
  },
  href: '#testHref',
};
