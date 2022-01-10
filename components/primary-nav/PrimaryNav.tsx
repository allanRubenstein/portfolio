import React from 'react';
import { Link } from '../common/common';
import styled from 'styled-components';
import LinkButton from '../link-button/LinkButton';
import { Colors } from '../typography/types';

export interface PrimaryNavProps {
  links?: Link[];
}

const PrimaryNav = ({ links }: PrimaryNavProps) => {
  return (
    <PrimaryNavWrap>
      {/* main nav links */}
      {links && (
        <LinksWrap>
          {links.map((link) => {
            return (
              <StyledLinkButton
                key={`top-nav-link-${link.text}`}
                variant="tertiary"
                fontColor="--black"
                href={link.href}
              >
                {link.text}
              </StyledLinkButton>
            );
          })}
        </LinksWrap>
      )}
    </PrimaryNavWrap>
  );
};

const PrimaryNavWrap = styled.nav`
  width: 100%;
`;
const LinksWrap = styled.div`
  display: flex;
`;
const StyledLinkButton = styled(LinkButton)`
  margin: 0 1rem;
`;

export default PrimaryNav;
