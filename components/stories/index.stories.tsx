import React from 'react';
import { Story } from '@storybook/react';
import Home from '../../pages/index';
import StoriesApp from './StoriesApp';
// import { indexProps } from './index';

export default {
  component: Home,
  title: 'Pages/index',
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
const Template: Story = () => <Home />;

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story = Template.bind({});
Default.args = {};
