import React from 'react';
import { Story } from '@storybook/react';
import { Title } from '../Title';
import { DynamicComponentProps } from '../DynamicComponent';

export default {
  component: Title,
  title: 'Components/Typography/Title',
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<DynamicComponentProps> = (
  args: DynamicComponentProps,
) => <Title {...args} />;

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default: Story<DynamicComponentProps> = Template.bind({});
Default.args = {
  children: 'Allan Rubenstein',
  tag: 'h1',
  whatever: 'cool',
  size: 3.0,
} as DynamicComponentProps;