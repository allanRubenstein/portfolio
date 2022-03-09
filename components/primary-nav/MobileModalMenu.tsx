import React from 'react';
import styled from 'styled-components';
import { Link } from '../common/common';
import LinkButton from '../common/link-button/LinkButton';
import Modal from '../modals/Modal';

export interface MobileModalMenuProps {
  onExit: () => void;
  links?: Link[];
}
// TODO: finish this
const MobileModalMenu = ({
  onExit,
  links,
}: MobileModalMenuProps): JSX.Element => {
  return (
    <Modal
      widthVariant="full"
      titleText="Mobile Nav Menu"
      verticallyCenter={false}
      onExit={onExit}
    >
      {links && (
        <ModalLinksWrap>
          {links.map((link) => {
            return (
              <StyledLinkButton
                key={link.text}
                href={link.text}
                variant="tertiary"
                // variant="secondary"
                fontColor="--black"
                fontSize={2.5}
              >
                {link.text}
              </StyledLinkButton>
            );
          })}
        </ModalLinksWrap>
      )}
    </Modal>
  );
};

const ModalLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0 2rem;
`;

const StyledLinkButton = styled(LinkButton)`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
`;

export default MobileModalMenu;
