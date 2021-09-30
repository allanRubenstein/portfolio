import styled from 'styled-components';
import { TitleTypographyProps } from './types';

export const Title = styled.span<TitleTypographyProps>`
  line-height: 1.2;
  font-size: ${(props) => props.$fontSize}rem;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  text-shadow: ${(props) =>
    props.$hasTextShadow
      ? `${props.$fontSize / 5}px ${
          props.$fontSize / 2.5
        }px 0px rgba(0, 0, 0, .8)`
      : undefined};
  color: ${(props) => `var(${props.$color || '--black'})`};
  /* TODO: come up with breakpoints */
  @media (min-width: 600px) {
    ${(props) =>
      props.$desktopFontSize ? `font-size: ${props.$desktopFontSize}rem` : ''}
  }
`;
