import styled, { css } from 'styled-components';
import { LinkButtonProps } from './types';
import Link from 'next/link';
import { Title } from '../typography/Title';

const LinkButton = (props: LinkButtonProps): JSX.Element => {
  /**
   * Renders title with children as needed by the button
   * @returns
   */
  const renderButtonInnerContents = () => {
    return (
      <StyledTitle
        // white by default, but secondary/tertiary button can have a color prop
        $fontColor={
          props.variant === 'secondary' ||
          props.variant === 'tertiary' ||
          props.variant === 'secondary-offset'
            ? props.fontColor || '--white'
            : '--white'
        }
        $isBold={true}
        $fontSize={props.fontSize || 2}
        as="span"
      >
        {props.children}
      </StyledTitle>
    );
  };

  /**
   * if href is passed, use Link, else button
   * @returns
   */
  const renderLinkOrButton = () => {
    if (props.href) {
      return (
        // render a link with an href

        <Link href={props.href} passHref>
          <LinkWrapper {...props}>
            {props.variant === 'offset' && (
              <>
                <BorderRight></BorderRight>
                <BorderCornerBottomLeft></BorderCornerBottomLeft>
                <BorderBottom></BorderBottom>
                <BorderCornerTopRight></BorderCornerTopRight>
              </>
            )}
            {props.variant === 'secondary-offset' && (
              <>
                <BorderRight {...props} href={undefined}>
                  {undefined}
                </BorderRight>
                <BorderCornerBottomLeft {...props} href={undefined}>
                  {undefined}
                </BorderCornerBottomLeft>
                <BorderBottom {...props} href={undefined}>
                  {undefined}
                </BorderBottom>
                <BorderCornerTopRight {...props} href={undefined}>
                  {undefined}
                </BorderCornerTopRight>
              </>
            )}
            {renderButtonInnerContents()}
          </LinkWrapper>
        </Link>
      );
    } else {
      return (
        // render a button
        <ButtonWrapper
          type={props.buttonType || 'button'}
          {...props}
          onClick={props.onClick}
        >
          {props.variant === 'offset' && (
            <>
              <BorderRight></BorderRight>
              <BorderCornerBottomLeft></BorderCornerBottomLeft>
              <BorderBottom></BorderBottom>
              <BorderCornerTopRight></BorderCornerTopRight>
            </>
          )}
          {props.variant === 'secondary-offset' && (
            <>
              <BorderRight {...props} href={undefined}>
                {undefined}
              </BorderRight>
              <BorderCornerBottomLeft {...props} href={undefined}>
                {undefined}
              </BorderCornerBottomLeft>
              <BorderBottom {...props} href={undefined}>
                {undefined}
              </BorderBottom>
              <BorderCornerTopRight {...props} href={undefined}>
                {undefined}
              </BorderCornerTopRight>
            </>
          )}
          {renderButtonInnerContents()}
        </ButtonWrapper>
      );
    }
  };

  return renderLinkOrButton();
};
export default LinkButton;

const buttonYPadding = 1;
const buttonHeight = '.3rem';

// shared css for button and link
const LinkAndButtonCss = css<LinkButtonProps>`
  /* Base styles */
  position: relative;
  border: none;
  display: block;
  padding: 0;
  &:hover {
    cursor: pointer;
  }

  /* primary/default */
  ${({ variant }) =>
    (variant === 'primary' || !variant) &&
    css`
      background-color: var(--red);
      box-shadow: 0 4px 0 0 var(--red-dark);
      padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
      transition: background-color var(--transition-short);
      &:hover {
        background-color: var(--red-light);
      }
      &:active {
        box-shadow: 0 2px 0 0 var(--red-dark);
        transform: translateY(2px);
      }
    `}

  /* offset button variant */
  ${({ variant }) =>
    variant === 'offset' &&
    css`
      background-color: var(--red);
      padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
      transition: background-color var(--transition-short);

      transform: translate(-${buttonHeight}, -${buttonHeight});
      transition: var(--transition-short);
      &:hover {
        background-color: var(--red-light);
      }
      &:active {
        transform: none;
      }
    `}

  /* secondary offset button variant */
  ${(props) =>
    props.variant === 'secondary-offset' &&
    css`
      color: ${props.fontColor ? `var(${props.fontColor})` : 'var(--black)'};
      background-color: ${props.$backgroundColor
        ? `var(${props.$backgroundColor})`
        : `transparent`};
      border: 1px solid
        ${props.fontColor ? `var(${props.fontColor})` : 'var(--black)'};
      padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
      transition: background-color var(--transition-short);

      transform: translate(-${buttonHeight}, -${buttonHeight});
      transition: var(--transition-short);
      &:hover {
        /* background-color: var(--red-light); */
      }
      &:active {
        transform: none;
      }
    `}


  /* secondary button variant */
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.$backgroundColor
        ? `var(${props.$backgroundColor})`
        : `transparent`};
      border: 1px solid var(${props.fontColor || '--black'});
      box-shadow: 0 4px 0 0 var(${props.fontColor || '--black'});
      padding: ${buttonYPadding}rem 2rem ${buttonYPadding - 0.2}rem;
      transition: background-color var(--transition-short);
      &:active {
        box-shadow: 0 2px 0 0 var(${props.fontColor || '--black'});
        transform: translateY(2px);
      }
    `}

  /* tertiary button variant */
  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      background-color: transparent;

      ${Title}::after {
        transition: var(--transition-short);
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        /* visibility: hidden; */
        width: 100%;
        max-width: 0%;
        right: 0;
        left: auto;
        background-color: currentColor;
      }
      &:hover,
      &:focus {
        ${Title}::after {
          /* visibility: visible; */
          max-width: 100%;
          top: 100%;
          left: 0;
          right: auto;
        }
      }
    `}
`;

const StyledTitle = styled(Title)`
  position: relative;
`;
const LinkWrapper = styled.a`
  ${LinkAndButtonCss}/* link specific styles */
`;
const ButtonWrapper = styled.button`
  ${LinkAndButtonCss}/* button specific styles */
`;

const BorderRight = styled.span<LinkButtonProps>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: ${(props) =>
    props.variant === 'secondary-offset' && props.fontColor
      ? `var(${props.fontColor})`
      : props.variant === 'secondary-offset'
      ? 'var(--black)'
      : 'var(--red-dark)'};
  transform-origin: 100% 0%;
  width: ${buttonHeight};
  transition: var(--transition-short);
  transform: translate(${buttonHeight}, ${buttonHeight});

  ${ButtonWrapper}:active & {
    transform: translate(0rem, 0rem) scaleX(0);
  }
  ${LinkWrapper}:active & {
    transform: translate(0rem, 0rem) scaleX(0);
  }
`;
const BorderBottom = styled.span<LinkButtonProps>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${(props) =>
    props.variant === 'secondary-offset' && props.fontColor
      ? `var(${props.fontColor})`
      : props.variant === 'secondary-offset'
      ? 'var(--black)'
      : 'var(--red-dark)'};
  transform-origin: 0px 100%;
  height: ${buttonHeight};
  transition: var(--transition-short);
  transform: translate(${buttonHeight}, ${buttonHeight}) scaleY(1);
  ${ButtonWrapper}:active & {
    transform: translate(0rem, 0rem) scaleY(0);
  }

  ${LinkWrapper}:active & {
    transform: translate(0rem, 0rem) scaleY(0);
  }
`;
const BorderCornerBottomLeft = styled.span<LinkButtonProps>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-left: ${buttonHeight} solid transparent;
  border-right: ${buttonHeight} solid transparent;
  border-top: ${buttonHeight} solid
    ${(props) =>
      props.variant === 'secondary-offset' && props.fontColor
        ? `var(${props.fontColor})`
        : props.variant === 'secondary-offset'
        ? 'var(--black)'
        : 'var(--red-dark)'};
  transform-origin: center bottom;
  transition: var(--transition-short);
  transform: translate(0rem, ${buttonHeight}) scale(1);

  ${ButtonWrapper}:active & {
    transform: translate(-${buttonHeight}, 0rem) scale(0);
  }
  ${LinkWrapper}:active & {
    transform: translate(-${buttonHeight}, 0rem) scale(0);
  }
`;
const BorderCornerTopRight = styled.span<LinkButtonProps>`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-left: 0rem solid transparent;
  border-right: ${buttonHeight} solid transparent;
  border-bottom: ${buttonHeight} solid
    ${(props) =>
      props.variant === 'secondary-offset' && props.fontColor
        ? `var(${props.fontColor})`
        : props.variant === 'secondary-offset'
        ? 'var(--black)'
        : 'var(--red-dark)'};
  transform-origin: right bottom;
  transition: var(--transition-short);
  transform: translate(${buttonHeight}, 0rem) scale(1);

  ${ButtonWrapper}:active & {
    transform: translate(0rem, -${buttonHeight}) scale(0);
  }
  ${LinkWrapper}:active & {
    transform: translateY(-${buttonHeight}) scale(0);
  }
`;
