import styled, { css } from 'styled-components';
import { LinkButtonProps } from './types';
import Link from 'next/link';
import { TitleBold } from '../typography/Title';

const LinkButton: React.FunctionComponent<LinkButtonProps> = (
  props: LinkButtonProps,
): JSX.Element => {
  // if href is passed, use Link, else button
  if (props.href) {
    return (
      // render a link with an href
      <Link href={props.href} passHref>
        <LinkWrapper>
          <TitleBold size="2" tag="span">
            {props.children}
          </TitleBold>
        </LinkWrapper>
      </Link>
    );
  } else {
    return (
      // render a button
      <ButtonWrapper onClick={props.onClick}>
        <TitleBold size="2" tag="span">
          {props.children}
        </TitleBold>
      </ButtonWrapper>
    );
  }
};
export default LinkButton;

const buttonYPadding = 1;
// shared css for button and link
const LinkAndButtonCss = css`
  /* Base styles */
  background-color: #d70000;
  box-shadow: 0 4px 0 0 #940000;
  color: #fff;
  display: block;
  border-radius: 2px;
  padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
  &:active {
    box-shadow: 0 2px 0 0 #940000;
    transform: translateY(2px);
  }
`;

const LinkWrapper = styled.a`
  ${LinkAndButtonCss}/* link specific styles */
`;
const ButtonWrapper = styled.button`
  ${LinkAndButtonCss}/* button specific styles */
`;
