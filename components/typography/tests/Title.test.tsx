import React from 'react';
import { Title } from '../Title';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('button snapshot', () => {
  // default
  const { container, rerender } = render(<Title $fontSize={5}>test</Title>);
  expect(container).toMatchSnapshot();

  // desktop font size
  rerender(
    <Title $fontSize={5} $desktopFontSize={10}>
      test
    </Title>,
  );
  expect(container).toMatchSnapshot();

  // different color
  rerender(
    <Title $fontSize={5} $color="--red">
      test
    </Title>,
  );
  expect(container).toMatchSnapshot();

  // text shadow
  rerender(
    <Title $fontSize={5} $color="--red" $hasTextShadow={true}>
      test
    </Title>,
  );
  expect(container).toMatchSnapshot();
});

test('a11y', async () => {
  const { container } = render(<Title $fontSize={5}>test</Title>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
