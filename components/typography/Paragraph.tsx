import styled from 'styled-components';
import { BREAKPOINTS } from '../../util/constants';
import { TypographyProps } from './types';

export interface ParagraphProps extends Partial<TypographyProps> {
  includeDefaultMargins?: boolean;
}
export const Paragraph = styled.p<Partial<ParagraphProps>>`
  line-height: 1.3;
  font-size: ${(props) => props.$fontSize || '1.6'}rem;
  font-family: 'Georgia', serif;
  ${(props) => (props.includeDefaultMargins ? `margin: 0 0 2rem;` : '')}
  color: ${(props) =>
    `${props.$fontColor ? `var(${props.$fontColor})` : 'inherit'}`};

  /* TODO: come up with breakpoints */
  @media (min-width: ${BREAKPOINTS.medium}px) {
    ${(props) =>
      props.$desktopFontSize ? `font-size: ${props.$desktopFontSize}rem` : ''}
  }
`;
