import React from 'react';
import FullScreenModal from '../common/full-screen-modal/FullScreenModal';

export interface MobileModalMenuProps {
  onExit: () => void;
}
// TODO: finish this
const MobileModalMenu = ({ onExit }: MobileModalMenuProps): JSX.Element => {
  return (
    <FullScreenModal titleText="Mobile Nav Menu" onExit={onExit}>
      content
    </FullScreenModal>
  );
};

export default MobileModalMenu;
