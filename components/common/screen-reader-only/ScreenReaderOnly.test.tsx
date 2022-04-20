import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import ScreenReaderOnly from './ScreenReaderOnly';

test('snapshot of ScreenReaderOnly.tsx', () => {
  const { container } = render(
    <ScreenReaderOnly>test text for screen readers only</ScreenReaderOnly>,
  );
  expect(container).toMatchInlineSnapshot(`
.c0 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  -webkit-clip: rect(0,0,0,0);
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}

<div>
  <span
    class="c0"
  >
    test text for screen readers only
  </span>
</div>
`);
});

test('a11y', async () => {
  const { container } = render(
    <ScreenReaderOnly>test text for screen readers only</ScreenReaderOnly>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
