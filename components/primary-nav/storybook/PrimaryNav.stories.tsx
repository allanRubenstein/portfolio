import React from 'react';
import { Story } from '@storybook/react';
import PrimaryNav from '../PrimaryNav';
import { PrimaryNavProps } from '../PrimaryNav';

export default {
  component: PrimaryNav,
  title: 'Components/PrimaryNav',
  parameters: {
    layout: 'fullscreen',
  },
  // decorators: [
  //   (story: any) => {
  //     return <div style={{ maxWidth: '400px', width: '100%' }}>{story()}</div>;
  //   },
  // ],
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<PrimaryNavProps> = (args: PrimaryNavProps) => (
  <PrimaryNav {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<PrimaryNavProps> = Template.bind({});
Default.args = {
  links: [
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
  ],
};
