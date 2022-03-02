import React from 'react';
import Modal from '../modals/Modal';

export interface MobileModalMenuProps {
  onExit: () => void;
}
// TODO: finish this
const MobileModalMenu = ({ onExit }: MobileModalMenuProps): JSX.Element => {
  return (
    <Modal titleText="Mobile Nav Menu" onExit={onExit}>
      content
    </Modal>
  );
};

export default MobileModalMenu;
