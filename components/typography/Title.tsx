import styled from 'styled-components';
import DynamicComponent from './DynamicComponent';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypographyProps } from './types';

export const TitleStyle = (
  props: TypographyProps,
): FlattenSimpleInterpolation => css`
  font-family: 'Arial', 'sans-serif';
  line-height: 1.2;
  font-size: ${props.size}rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;

  /* TODO: come up with breakpoints */
  @media (min-width: 600px) {
    ${props.desktopSize ? `font-size: ${props.desktopSize}rem` : ''}
  }
`;

// styled() constructor extends/inherits the styling of DynamicComponent in this case
export const Title = styled(DynamicComponent)`
  ${(props) => TitleStyle({ size: props.size, desktopSize: props.desktopSize })}
`;

export const TitleBold = styled(DynamicComponent)`
  ${(props) => TitleStyle({ size: props.size, desktopSize: props.desktopSize })}
  font-weight: 700;
`;
