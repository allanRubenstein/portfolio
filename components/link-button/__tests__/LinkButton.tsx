import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('works', () => {
  // it works :)
  const { container } = render(<LinkButton>test</LinkButton>);

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: red;
    }

    <div>
      <button
        class="c0"
      >
        test
      </button>
    </div>
  `);
});

test('a11y', async () => {
  const { container } = render(<LinkButton>test</LinkButton>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
