import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('works', () => {
  // it works :)
  const { container } = render(<LinkButton>test</LinkButton>);

  expect(container).toMatchInlineSnapshot(`
.c1 {
  line-height: 1.2;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Roboto Condensed',sans-serif;
  font-weight: 700;
}

.c0 {
  border: none;
  background-color: var(--red);
  box-shadow: 0 4px 0 0 var(--red-dark);
  color: var(--white);
  display: block;
  border-radius: 2px;
  padding: 1rem 2rem 0.8rem;
  -webkit-transition: background-color 0.1s;
  transition: background-color 0.1s;
}

.c0:hover {
  background-color: var(--red-light);
  cursor: pointer;
}

.c0:active {
  box-shadow: 0 2px 0 0 var(--red-dark);
  -webkit-transform: translateY(2px);
  -ms-transform: translateY(2px);
  transform: translateY(2px);
}

@media (min-width:600px) {

}

<div>
  <button
    class="c0"
  >
    <span
      class="c1"
    >
      test
    </span>
  </button>
</div>
`);
});

test('a11y', async () => {
  const { container } = render(<LinkButton>test</LinkButton>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
