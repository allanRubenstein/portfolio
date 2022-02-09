import React from 'react';
import { Link } from '../common/common';
import styled from 'styled-components';
import LinkButton from '../link-button/LinkButton';
import { ColorsEnum } from '../typography/types';
import Image from 'next/image';

export interface PrimaryNavProps {
  links?: Link[];
}

// TODO: mobile, tablet

const PrimaryNav = ({ links }: PrimaryNavProps): JSX.Element => {
  return (
    <PrimaryNavWrap>
      <LogoSection>
        <ImageWrap>
          <Image
            src="/images/nav/nav-logo.png"
            alt="logo"
            width={52}
            height={60}
            layout={'responsive'}
          />
        </ImageWrap>
      </LogoSection>

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

const tablet = '590px';

const PrimaryNavWrap = styled.nav`
  width: 100%;
  padding-right: 1rem;
  height: 4.5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${tablet}) {
    height: 6.5rem;
    justify-content: flex-start;
  }
`;
const LinksWrap = styled.div`
  display: flex;
`;
const StyledLinkButton = styled(LinkButton)`
  margin: 0 1rem;
`;
const ImageWrap = styled.div`
  margin-left: 1rem;
  width: 3rem;
  height: auto;
  display: block;

  @media screen and (min-width: ${tablet}) {
    margin-left: 5rem;
    width: 5.2rem;
  }
`;
const LogoSection = styled.div`
  width: 4rem;
  height: 100%;
  margin-right: 1.5rem;
  background-color: var(${ColorsEnum.red});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    content: '';
    position: absolute;
    display: block;
    left: 100%;
    top: 0;
    border-top: 0 solid transparent;
    border-bottom: 4.5rem solid transparent;
    border-left: 1rem solid var(${ColorsEnum.red});
  }

  @media screen and (min-width: ${tablet}) {
    width: 15rem;
    margin-right: 6.5rem;

    ::after {
      border-bottom: 6.5rem solid transparent;
      border-left: 6.5rem solid var(${ColorsEnum.red});
    }
  }
`;

export default PrimaryNav;
