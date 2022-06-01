import React from 'react';
import { Story } from '@storybook/react';
import PortfolioItem from './PortfolioItem';
import { PortfolioItemProps } from './PortfolioItem';
import StoriesApp from '../../stories/pages/StoriesApp';

export default {
  component: PortfolioItem,
  title: 'Pages/Portfolio/PortfolioItem',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story: any) => {
      return <StoriesApp>{story()}</StoriesApp>;
    },
  ],
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<PortfolioItemProps> = (args: PortfolioItemProps) => (
  <PortfolioItem {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<PortfolioItemProps> = Template.bind({});
Default.args = {
  portfolioItem: {
    name: 'Test Item',
  },
};
