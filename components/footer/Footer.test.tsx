import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Footer from './Footer';

test('snapshot', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

test('a11y', async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
