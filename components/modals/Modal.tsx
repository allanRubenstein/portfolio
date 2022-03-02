import React from 'react';
import AriaModal from 'react-aria-modal';
import styled, { css } from 'styled-components';
import { ColorsEnum } from '../typography/types';
import ScreenReaderOnly from '../common/screen-reader-only/ScreenReaderOnly';
import XIcon from '../common/css-icons/XIcon';

export interface ModalProps {
  children: any;
  titleText: string;
  onExit: () => void;
  className?: string;
}

const Modal = ({
  titleText,
  onExit,
  children,
  className,
}: ModalProps): JSX.Element => {
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
      <ModalHeaderWrap>
        <CloseModalButton onClick={onExit}>
          <XIcon screenReaderText="Close Modal" />
        </CloseModalButton>
      </ModalHeaderWrap>
      {children}
    </AriaModal>
  );
};
const ModalHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const CloseModalButton = styled.button``;

const StyledModal = styled(Modal)`
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  background-color: var(${ColorsEnum.white});
`;

export default StyledModal;
