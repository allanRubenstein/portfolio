import React, { useState } from 'react';
import { Link } from '../common/common';
import styled from 'styled-components';
import LinkButton from '../common/link-button/LinkButton';
import { ColorsEnum } from '../typography/types';
import Image from 'next/image';
import { BREAKPOINTS } from '../../util/constants';
import useWindowSize from '../../util/hooks/useWindowSize';
import ScreenReaderOnly from '../common/screen-reader-only/ScreenReaderOnly';
import MobileModalMenu from './MobileModalMenu';

export interface PrimaryNavProps {
  links?: Link[];
}

// TODO: mobile, tablet

const PrimaryNav = ({ links }: PrimaryNavProps): JSX.Element => {
  const size = useWindowSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <PrimaryNavWrap>
      <LogoSection>
        <ImageWrap>
          {/* 
            // TODO: add home page link
          */}
          <a href="#">
            <Image
              src="/images/nav/nav-logo.png"
              alt="logo"
              width={52}
              height={60}
              layout={'responsive'}
            />
          </a>
        </ImageWrap>
      </LogoSection>

      {/* main nav links */}
      {links && size.breakpoints.includes('small') ? (
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
      ) : (
        <LinksWrap>
          <LinkButton
            // TODO: add home page link
            href="#"
            variant="tertiary"
            fontSize={1.5}
            fontColor="--black"
          >
            Allan Rubenstein{' '}
            <ScreenReaderOnly>Go To Home Page</ScreenReaderOnly>
          </LinkButton>
          <HamburgerMenuButton
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamburgerMenuButtonBar />
            <HamburgerMenuButtonBar />
            <HamburgerMenuButtonBar />
            <ScreenReaderOnly>open nav menu</ScreenReaderOnly>
          </HamburgerMenuButton>
          {isMobileMenuOpen && (
            <MobileModalMenu
              links={links}
              onExit={() => setIsMobileMenuOpen(false)}
            />
          )}
        </LinksWrap>
      )}
    </PrimaryNavWrap>
  );
};

const PrimaryNavWrap = styled.nav`
  width: 100%;
  height: 4.5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    height: 6.5rem;
    justify-content: flex-start;
  }
`;
const LinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.5rem;
  padding-left: 2rem;
  width: 100%;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid var(${ColorsEnum.gray});
  @media screen and (min-width: ${BREAKPOINTS.small}px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    padding-left: 6.5rem;
    justify-content: flex-start;
  }
`;
const StyledLinkButton = styled(LinkButton)`
  padding: 1rem 0;
  margin: 0 1rem;
`;
const ImageWrap = styled.div`
  margin-left: 1rem;
  width: 3rem;
  height: auto;
  display: block;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    margin-left: 5rem;
    width: 5.2rem;
  }
`;
const LogoSection = styled.div`
  width: 4rem;
  height: 100%;
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

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    width: 15rem;
    flex-shrink: 0;

    ::after {
      border-bottom: 6.5rem solid transparent;
      border-left: 6.5rem solid var(${ColorsEnum.red});
    }
  }
`;

const HamburgerMenuButton = styled.button`
  width: 2.5rem;
  height: 100%;
  border: none;
  background: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;
const HamburgerMenuButtonBar = styled.span`
  width: 100%;
  height: 0.2rem;
  background-color: var(${ColorsEnum.red});
  display: block;
  margin: 0.6rem 0;
`;

export default PrimaryNav;
