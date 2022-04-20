import React from 'react';
import { Story } from '@storybook/react';
import Footer from './Footer';
import { FooterProps } from './Footer';

export default {
  component: Footer,
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story: any) => {
      return (
        <div style={{ width: '100%', position: 'fixed', bottom: '0' }}>
          {story()}
        </div>
      );
    },
  ],
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<FooterProps> = (args: FooterProps) => (
  <Footer {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<FooterProps> = Template.bind({});
Default.args = {};
