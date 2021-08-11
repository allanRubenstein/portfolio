import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import DynamicComponent from './DynamicComponent';

export const TitleStyle = (
  size: number,
  desktopSize?: number,
): FlattenSimpleInterpolation => css`
  font-family: 'Arial', 'sans-serif';
  line-height: 1.92;
  font-size: ${size}rem;

  /* TODO: come up with breakpoints */
  @media (min-width: 600px) {
    ${desktopSize ? `font-size: ${desktopSize}rem` : ''}
  }
`;

const TestTitle = styled(DynamicComponent)`
  ${(props) => TitleStyle(props.size, props.desktopSize)}
`;

export default TestTitle;
