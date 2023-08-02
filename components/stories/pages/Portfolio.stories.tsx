import React from 'react';
import { Story } from '@storybook/react';
import Portfolio, { PortfolioProps } from '../../../pages/portfolio';
import StoriesApp from './StoriesApp';
// import { indexProps } from './index';
import { ComponentMeta } from '@storybook/react';
import { PortfolioCardProps } from '../../portfolio-card/PortfolioCard';

export default {
  component: Portfolio,
  title: 'Pages/Portfolio',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return <StoriesApp>{Story()}</StoriesApp>;
    },
  ],
} as ComponentMeta<typeof StoriesApp>;

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<PortfolioProps> = (args: PortfolioProps) => (
  <Portfolio {...args} />
);

const testItems: PortfolioCardProps[] = [
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
  {
    title: 'Text Here',
    href: '#',
    image: {
      src: 'https://placekitten.com/500/300',
      alt: 'CAT ALT TEXT WOO',
    },
  },
];

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<PortfolioProps> = Template.bind({});
Default.args = {
  web: testItems,
  graphicDesign: testItems,
  photography: testItems,
};
