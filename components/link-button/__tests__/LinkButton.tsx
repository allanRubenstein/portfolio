import React from 'react';
import LinkButton from '../LinkButton';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('works', () => {
  // it works :)
  const { container } = render(<LinkButton>test</LinkButton>);

  expect(container).toMatchInlineSnapshot(`
.c1 {
  font-family: 'Arial','sans-serif';
  line-height: 1.2;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed',sans-serif;
  font-weight: 700;
}

.c0 {
  background-color: #d70000;
  box-shadow: 0 4px 0 0 #940000;
  color: #fff;
  display: block;
  border-radius: 2px;
  padding: 1rem 2rem 0.8rem;
}

.c0:active {
  box-shadow: 0 2px 0 0 #940000;
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
      class="DynamicComponent__StyledDynamicComponent-sc-9g2ehi-0 c1"
      size="2"
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
