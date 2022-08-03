import { css, FlattenSimpleInterpolation } from 'styled-components';
import { BREAKPOINTS } from '../../util/constants';
import { BreakpointString } from '../../util/hooks/useWindowSize';

export const BoxShadow = css`
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.2);
`;

/**
 * Takes a breakpoint and css, and automatically adds the syntax for a min width breakpoint media query
 * @param breakpoint
 * @param innerCss
 * @returns
 */
export const minWidthMediaQuery = (
  breakpoint: BreakpointString,
  innerCss: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media screen and (min-width: ${BREAKPOINTS[breakpoint]}px) {
      ${innerCss}
    }
  `;
};
