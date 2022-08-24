import styled from 'styled-components';
import { BREAKPOINTS } from '../../util/constants';
import { TitleTypographyProps } from './types';

export const Title = styled.span<TitleTypographyProps>`
  line-height: 0.9;
  font-size: ${(props) => props.$fontSize}rem;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  text-shadow: ${(props) =>
    props.$hasTextShadow
      ? `${props.$fontSize / 5}px ${
          props.$fontSize / 2.5
        }px 0px rgba(0, 0, 0, .8)`
      : undefined};
  color: ${(props) =>
    `${props.$fontColor ? `var(${props.$fontColor})` : 'inherit'}`};

  /* text-transform: uppercase; */
  text-transform: ${(props) => `${props.$textTransform || 'uppercase'}`};
  /* TODO: come up with breakpoints */
  @media (min-width: ${BREAKPOINTS.medium}px) {
    ${(props) =>
      props.$desktopFontSize ? `font-size: ${props.$desktopFontSize}rem` : ''}
  }
`;
