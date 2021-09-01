import React from 'react';
import { Story } from '@storybook/react';
import { Title } from '../Title';
import { TitleTypographyProps } from '../types';

export default {
  component: Title,
  title: 'Components/Typography/Title',
  parameters: {
    layout: 'centered',
  },
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<TitleTypographyProps> = (args: TitleTypographyProps) => (
  <Title {...args}>Allan Rubenstein</Title>
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<TitleTypographyProps> = Template.bind({});
Default.args = {
  $fontSize: 6.0,
};

export const Bold: Story<TitleTypographyProps> = Template.bind({});
Bold.args = {
  $fontSize: 6.0,
  $isBold: true,
};
