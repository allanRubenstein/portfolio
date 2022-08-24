import styled from 'styled-components';
import { BREAKPOINTS } from '../../util/constants';
import { ColorsEnum, TypographyProps } from './types';

export interface ParagraphProps extends Partial<TypographyProps> {
  includeDefaultMargins?: boolean;
  hasMaxCharacterLimit?: boolean;
  children?: React.ReactNode;
}
const StyledParagraph = styled.p<Partial<ParagraphProps>>`
  line-height: 1.4;
  font-size: ${(props) => props.$fontSize || '1.6'}rem;
  font-family: 'Georgia', serif;
  ${(props) => (props.includeDefaultMargins ? `margin-bottom: 2rem;` : '')}
  ${(props) => (props.hasMaxCharacterLimit ? `max-width: 60ch;` : '')}
  color: ${(props) =>
    `${props.$fontColor ? `var(${props.$fontColor})` : 'inherit'}`};

  a {
    text-decoration: underline;
    color: var(${ColorsEnum.red});
  }

  /* TODO: come up with breakpoints */
  @media (min-width: ${BREAKPOINTS.medium}px) {
    ${(props) =>
      props.$desktopFontSize ? `font-size: ${props.$desktopFontSize}rem` : ''}
  }
`;

export const Paragraph = (props: ParagraphProps): JSX.Element => {
  return (
    <StyledParagraph
      {...props}
      includeDefaultMargins={
        props.includeDefaultMargins === false ? false : true
      }
      hasMaxCharacterLimit={props.hasMaxCharacterLimit === false ? false : true}
    >
      {props.children}
    </StyledParagraph>
  );
};
