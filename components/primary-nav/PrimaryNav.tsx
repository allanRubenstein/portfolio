import React, { useState } from 'react';
import { LinkInterface } from '../common/common';
import styled from 'styled-components';
import LinkButton from '../common/link-button/LinkButton';
import { ColorsEnum } from '../typography/types';
import Image from 'next/image';
import { BREAKPOINTS } from '../../util/constants';
import useWindowSize from '../../util/hooks/useWindowSize';
import ScreenReaderOnly from '../common/screen-reader-only/ScreenReaderOnly';
import MobileModalMenu from './MobileModalMenu';
import { Title } from '../typography/Title';
import { useRouter } from 'next/router';

export interface PrimaryNavProps {
  links?: LinkInterface[];
  mainId?: string;
}

// TODO: mobile, tablet

const PrimaryNav = ({ links, mainId }: PrimaryNavProps): JSX.Element => {
  const size = useWindowSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <StickyWrap>
      <SkipToMain href={`#${mainId}`}>
        <Title $fontSize={3} $fontColor="--black" $isBold>
          skip to main content
        </Title>
      </SkipToMain>

      <PrimaryNavWrap>
        <LogoSection>
          <ImageWrap>
            {/* 
            // TODO: add home page link
          */}
            <a href="/">
              <Image
                src="/images/nav/nav-logo.png"
                alt="logo"
                width={52}
                height={60}
                layout={'responsive'}
              />
              <ScreenReaderOnly>Go To Home Page</ScreenReaderOnly>
            </a>
          </ImageWrap>
        </LogoSection>

        {/* main nav links */}
        {links && size?.breakpoints.includes('small') ? (
          <LinksWrap>
            {links.map((link) => {
              return (
                <StyledLinkButton
                  key={`top-nav-link-${link.text}`}
                  variant={
                    router?.pathname === link.href
                      ? 'tertiary-active'
                      : 'tertiary'
                  }
                  fontColor="--black"
                  href={link.href}
                >
                  {link.text}
                </StyledLinkButton>
              );
            })}
          </LinksWrap>
        ) : (
          size &&
          links && (
            <LinksWrap>
              <LinkButton
                // TODO: add home page link
                href="/"
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
          )
        )}
      </PrimaryNavWrap>
    </StickyWrap>
  );
};

const StickyWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(${ColorsEnum.white});
`;

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

const SkipToMain = styled.a`
  background-color: var(${ColorsEnum.white});
  left: 1rem;
  right: 1rem;
  top: -100%;
  margin: auto;
  position: absolute;
  transform: translateY(-100%);
  transition: 0.1s;
  font-size: 3rem;
  z-index: 11;
  text-align: center;
  &:focus,
  &:focus-within {
    top: 0.5rem;
    transform: translateY(0);
    outline: 1px dashed #3d3935;
    outline-offset: -5px;
  }
`;

export default PrimaryNav;
