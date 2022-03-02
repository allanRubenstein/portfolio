import React from 'react';
import styled, { css } from 'styled-components';
import { ColorsEnum } from '../../typography/types';
import ScreenReaderOnly from '../screen-reader-only/ScreenReaderOnly';

export interface XIconProps {
  screenReaderText?: string;
  lineWidth?: string;
}

interface XIconWrapProps {
  lineWidth: string;
}

const XIcon = ({
  screenReaderText,
  lineWidth = '3rem',
}: XIconProps): JSX.Element => {
  return (
    <XIconWrap lineWidth={lineWidth}>
      <ScreenReaderOnly>
        <p>{screenReaderText}</p>
      </ScreenReaderOnly>
    </XIconWrap>
  );
};

const LineCss = css`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 0.2rem;
  content: '';
  display: block;
  background-color: var(${ColorsEnum.red});
`;

const XIconWrap = styled.span<XIconWrapProps>`
  ${({ lineWidth }) =>
    css`
      width: ${lineWidth};
      height: ${lineWidth};
    `}
  position: relative;
  display: block;
  &::before {
    ${LineCss}
    transform: rotate(45deg)
  }
  &::after {
    ${LineCss}
    transform: rotate(-45deg)
  }
`;

export default XIcon;
