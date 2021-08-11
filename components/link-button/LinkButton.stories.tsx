import React from 'react';
import { Story } from '@storybook/react';
import LinkButton from './LinkButton';
import { LinkButtonProps } from './types';

export default {
  component: LinkButton,
  title: 'Components/LinkButton',
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<LinkButtonProps> = (args: LinkButtonProps) => (
  <LinkButton {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Link: Story<LinkButtonProps> = Template.bind({});
Link.args = {
  children: 'default button',
  href: '#testHref',
} as LinkButtonProps;

export const Button: Story<LinkButtonProps> = Template.bind({});
Button.args = {
  children: 'default button',
  onClick: () => console.log('clicked')
} as LinkButtonProps;
