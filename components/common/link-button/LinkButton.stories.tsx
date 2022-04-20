import React from 'react';
import { Story } from '@storybook/react';
import LinkButton from './LinkButton';
import { LinkButtonProps } from './types';

export default {
  component: LinkButton,
  title: 'Components/LinkButton',
  parameters: {
    layout: 'centered',
  },
};

// TYPES IN STORYBOOK: This is how you do it
// see https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const Template: Story<LinkButtonProps> = (args: LinkButtonProps) => (
  <LinkButton {...args} />
);

// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Link: Story<LinkButtonProps> = Template.bind({});
Link.args = {
  children: 'default link',
  href: '#testHref',
} as LinkButtonProps;

export const Button: Story<LinkButtonProps> = Template.bind({});
Button.args = {
  children: 'default button',
  onClick: () => console.log('clicked'),
} as LinkButtonProps;

export const SecondaryButton: Story<LinkButtonProps> = Template.bind({});
SecondaryButton.args = {
  children: 'secondary button',
  variant: 'secondary',
  onClick: () => console.log('clicked'),
  fontColor: '--black',
  $backgroundColor: '--white',
} as LinkButtonProps;

export const SecondaryOffset: Story<LinkButtonProps> = Template.bind({});
SecondaryOffset.args = {
  children: 'secondary offset button',
  variant: 'secondary-offset',
  onClick: () => console.log('clicked'),
  fontColor: '--black',
  $backgroundColor: '--white',
} as LinkButtonProps;

export const TertiaryButton: Story<LinkButtonProps> = Template.bind({});
TertiaryButton.args = {
  children: 'tertiary button',
  variant: 'tertiary',
  onClick: () => console.log('clicked'),
  fontColor: '--black',
} as LinkButtonProps;

export const OffsetButton: Story<LinkButtonProps> = Template.bind({});
OffsetButton.args = {
  children: 'offset button',
  onClick: () => console.log('clicked'),
  variant: 'offset',
} as LinkButtonProps;

export const OffsetLink: Story<LinkButtonProps> = Template.bind({});
OffsetLink.args = {
  children: 'offset link',
  variant: 'offset',
  href: '#',
} as LinkButtonProps;
