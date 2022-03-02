import React from 'react';
import AriaModal from 'react-aria-modal';
import styled, { css } from 'styled-components';
import { ColorsEnum } from '../../typography/types';
import ScreenReaderOnly from '../screen-reader-only/ScreenReaderOnly';

export interface FullScreenModalProps {
  children: any;
  titleText: string;
  onExit: () => void;
  className?: string;
}

const FullScreenModal = ({
  titleText,
  onExit,
  children,
  className,
}: FullScreenModalProps): JSX.Element => {
  return (
    <AriaModal
      titleText={titleText}
      onExit={onExit}
      dialogClass={className}
      verticallyCenter={true}
      // dialogStyle={dialogStyleProp}
    >
      {/* <StyledModalWrap>
        <button onClick={onExit}>close</button>
        {children}
      </StyledModalWrap> */}
      <div>
        <button onClick={onExit}>
          <ScreenReaderOnly>close modal</ScreenReaderOnly>
        </button>
        {children}
      </div>
    </AriaModal>
  );
};

const StyledFullScreenModal = styled(FullScreenModal)`
  width: calc(100vw - 10rem);
  height: calc(100vh - 10rem);
  background-color: var(${ColorsEnum.white});
`;

export default StyledFullScreenModal;
