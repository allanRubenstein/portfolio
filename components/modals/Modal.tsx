import React from 'react';
import AriaModal from 'react-aria-modal';
import styled, { css } from 'styled-components';
import { ColorsEnum } from '../typography/types';
import XIcon from '../common/css-icons/XIcon';

export interface ModalProps {
  children: any;
  titleText: string;
  onExit: () => void;
  className?: string;
  widthVariant?: 'full' | 'windowed';
  heightVariant?: 'full' | 'windowed';
  verticallyCenter?: boolean;
}

const Modal = ({
  titleText,
  onExit,
  children,
  className,
  verticallyCenter,
}: ModalProps): JSX.Element => {
  return (
    <AriaModal
      titleText={titleText}
      onExit={onExit}
      dialogClass={className}
      verticallyCenter={verticallyCenter}
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
  background-color: var(${ColorsEnum.white});

  ${({ widthVariant }) =>
    widthVariant === 'full'
      ? css`
          width: 100vw;
        `
      : widthVariant === 'windowed'
      ? css`
          width: calc(100vw - 5rem);
        `
      : null}

  ${({ heightVariant }) =>
    heightVariant === 'full'
      ? css`
          height: 100vh;
        `
      : heightVariant === 'windowed'
      ? css`
          height: calc(100vh - 5rem);
        `
      : null}
`;

export default StyledModal;
