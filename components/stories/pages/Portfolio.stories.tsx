import React from 'react';
import { Story } from '@storybook/react';
import Portfolio from '../../../pages/portfolio';
import StoriesApp from './StoriesApp';
// import { indexProps } from './index';
import { ComponentMeta } from '@storybook/react';

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
const Template: Story = () => <Portfolio />;

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story = Template.bind({});
Default.args = {};
