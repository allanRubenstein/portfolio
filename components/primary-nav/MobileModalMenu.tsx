import React from 'react';
import styled from 'styled-components';
import { LinkInterface } from '../common/common';
import LinkButton from '../common/link-button/LinkButton';
import Modal from '../modals/Modal';

export interface MobileModalMenuProps {
  onExit: () => void;
  links?: LinkInterface[];
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
              <li key={link.text}>
                <StyledLinkButton
                  href={link.text}
                  variant="tertiary"
                  // variant="secondary"
                  fontColor="--black"
                  fontSize={2.5}
                >
                  {link.text}
                </StyledLinkButton>
              </li>
            );
          })}
        </ModalLinksWrap>
      )}
    </Modal>
  );
};

const ModalLinksWrap = styled.ul`
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
