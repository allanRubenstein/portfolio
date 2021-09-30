import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('button snapshot', () => {
  // submit button
  const { container, rerender } = render(
    <LinkButton buttonType={'submit'}>test</LinkButton>,
  );
  expect(container).toMatchSnapshot();

  // button button
  rerender(<LinkButton buttonType={'button'}>test</LinkButton>);
  expect(container).toMatchSnapshot();

  // offset button variant
  rerender(<LinkButton variant="offset">test</LinkButton>);
  expect(container).toMatchSnapshot();
});
test('link snapshot', () => {
  // basic link
  const { container, rerender } = render(
    <LinkButton href="#">test</LinkButton>,
  );
  expect(container).toMatchSnapshot();

  // offset link
  rerender(
    <LinkButton href="#test2" variant="offset">
      test 2
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();
});

test('a11y', async () => {
  const { container } = render(<LinkButton>test</LinkButton>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
