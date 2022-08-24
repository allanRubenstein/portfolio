import React from 'react';
import { Story } from '@storybook/react';
import PageMainHeader from './PageMainHeader';
import { PageMainHeaderProps } from './PageMainHeader';

export default {
  component: PageMainHeader,
  title: 'Components/Typography/PageMainHeader',
  parameters: {
    layout: 'centered',
  },
  // decorators: [
  //   (story: any) => {
  //     return <div style={{ maxWidth: '400px', width: '100%' }}>{story()}</div>;
  //   },
  // ],
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<PageMainHeaderProps> = (args: PageMainHeaderProps) => (
  <PageMainHeader {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<PageMainHeaderProps> = Template.bind({});
Default.args = {
  children: 'Page Main Header',
};
