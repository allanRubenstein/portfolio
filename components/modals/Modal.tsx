import React from 'react';
import ReactModal from 'react-modal';
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
  isOpen: boolean;
}

const Modal = ({
  titleText,
  onExit,
  children,
  className,
  isOpen,
}: ModalProps): JSX.Element => {
  return (
    <ReactModal
      contentLabel={titleText}
      onAfterClose={onExit}
      className={className}
      isOpen={isOpen}
      style={{ overlay: { zIndex: '11' } }}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onExit}
    >
      <ModalHeaderWrap>
        <CloseModalButton onClick={onExit}>
          <XIcon screenReaderText="Close Modal" />
        </CloseModalButton>
      </ModalHeaderWrap>
      {children}
    </ReactModal>
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
          margin: auto;
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
