import React from 'react';
import AriaModal from 'react-aria-modal';

export interface MobileModalMenuProps {
  onExit?: () => void;
}
// TODO: finish this
const MobileModalMenu: React.FunctionComponent<MobileModalMenuProps> = ({
  onExit,
}: MobileModalMenuProps) => {
  return (
    <AriaModal titleText="Mobile Nav Menu" onExit={onExit}>
      <button onClick={onExit}>close</button>
      <p>example content</p>
    </AriaModal>
  );
};

export default MobileModalMenu;
