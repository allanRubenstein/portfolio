import styled, { css } from 'styled-components';
import { LinkButtonProps } from './types';
import Link from 'next/link';
import { Title } from '../typography/Title';

const LinkButton: React.FunctionComponent<LinkButtonProps> = (
  props: LinkButtonProps,
): JSX.Element => {
  // if href is passed, use Link, else button
  if (props.href) {
    return (
      // render a link with an href
      <Link href={props.href} passHref>
        <LinkWrapper>
          <Title $isBold={true} $fontSize={2} as="span">
            {props.children}
          </Title>
        </LinkWrapper>
      </Link>
    );
  } else {
    return (
      // render a button
      <ButtonWrapper onClick={props.onClick}>
        <Title $isBold={true} $fontSize={2} as="span">
          {props.children}
        </Title>
      </ButtonWrapper>
    );
  }
};
export default LinkButton;

const buttonYPadding = 1;
// shared css for button and link
const LinkAndButtonCss = css`
  /* Base styles */
  border: none;
  background-color: var(--red);
  box-shadow: 0 4px 0 0 var(--red-dark);
  color: var(--white);
  display: block;
  border-radius: 2px;
  padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
  transition: background-color 0.1s;
  &:hover {
    background-color: var(--red-light);
    cursor: pointer;
  }
  &:active {
    box-shadow: 0 2px 0 0 var(--red-dark);
    transform: translateY(2px);
  }
`;

const LinkWrapper = styled.a`
  ${LinkAndButtonCss}/* link specific styles */
`;
const ButtonWrapper = styled.button`
  ${LinkAndButtonCss}/* button specific styles */
`;
