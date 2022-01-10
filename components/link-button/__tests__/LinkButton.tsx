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

test('secondary button and link snapshot', () => {
  // basic link
  const { container, rerender } = render(
    <LinkButton
      href="#"
      variant="secondary"
      textColor="--black"
      $backgroundColor="--white"
    >
      test
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();

  // button
  rerender(
    <LinkButton
      onClick={() => {
        // do nothing
      }}
      variant="secondary"
      textColor="--black"
      $backgroundColor="--white"
    >
      test 2
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();
});
test('secondary offset button and link snapshot', () => {
  // basic link
  const { container, rerender } = render(
    <LinkButton
      href="#"
      variant="secondary-offset"
      textColor="--black"
      $backgroundColor="--white"
    >
      test
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();

  // button
  rerender(
    <LinkButton
      onClick={() => {
        // do nothing
      }}
      variant="secondary-offset"
      textColor="--black"
      $backgroundColor="--white"
    >
      test 2
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();
});

test('tertiary button and link snapshot', () => {
  // basic link
  const { container, rerender } = render(
    <LinkButton href="#" variant="tertiary" textColor="--red-dark">
      test
    </LinkButton>,
  );
  expect(container).toMatchSnapshot();

  // button
  rerender(
    <LinkButton
      onClick={() => {
        // do nothing
      }}
      variant="tertiary"
      textColor="--red"
    >
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
