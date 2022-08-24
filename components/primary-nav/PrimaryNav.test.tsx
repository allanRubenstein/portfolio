import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import PrimaryNav from './PrimaryNav';
import { resizeWindow } from '../../util/testing/testUtils';

afterEach(() => {
  resizeWindow();
});

const defaultNavLinks = [
  {
    text: 'home',
    href: '#1',
  },
  {
    text: 'about',
    href: '#2',
  },
  {
    text: 'portfolio',
    href: '#3',
  },
  {
    text: 'contact',
    href: '#4',
  },
];

test('large screen size snapshot', async () => {
  resizeWindow('large');

  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  await screen.findByRole('link', { name: /portfolio/i });

  expect(container).toMatchSnapshot();
});
test('small screen size snapshot', async () => {
  resizeWindow('small');

  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  await screen.findByRole('link', { name: /portfolio/i });

  await waitFor(() => {
    expect(container).toMatchSnapshot();
  });
});
test('xsmall screen size snapshot', async () => {
  resizeWindow('xSmall');

  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  await screen.findByRole('button', { name: /open nav menu/i });
  await waitFor(() => {
    expect(container).toMatchSnapshot();
  });
});

test('desktop a11y', async () => {
  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  let results;
  await waitFor(async () => {
    results = await axe(container);
  });
  expect(results).toHaveNoViolations();
});

test('small a11y', async () => {
  resizeWindow('small');
  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  let results;
  await waitFor(async () => {
    results = await axe(container);
  });
  expect(results).toHaveNoViolations();
});

test('xSmall a11y', async () => {
  resizeWindow('xSmall');
  const { container } = render(<PrimaryNav links={defaultNavLinks} />);
  let results;
  await waitFor(async () => {
    results = await axe(container);
  });
  expect(results).toHaveNoViolations();
});

test('mobile modal functionality and a11y', async () => {
  resizeWindow('xSmall');
  render(<PrimaryNav links={defaultNavLinks} />);

  const hamburgerButton = await screen.findByRole('button', {
    name: /open nav menu/i,
  });
  await waitFor(() => {
    userEvent.click(hamburgerButton);
  });
  const modal = await screen.findByRole('dialog');

  expect(modal).toMatchSnapshot();

  let results;
  await waitFor(async () => {
    results = await axe(modal);
  });
  expect(results).toHaveNoViolations();
});
