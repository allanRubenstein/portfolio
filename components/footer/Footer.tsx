import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ScreenReaderOnly from '../common/screen-reader-only/ScreenReaderOnly';
import { ColorsEnum } from '../typography/types';

export interface FooterProps {
  classes?: string;
}

const Footer = ({ classes }: FooterProps) => {
  return (
    <FooterWrap>
      <ImageWrap>
        <Link
          // TODO: add real link
          href="/"
        >
          <a>
            <Image
              src="/images/nav/nav-logo.png"
              alt="logo"
              width={52}
              height={60}
              layout={'responsive'}
            />
            <ScreenReaderOnly>Home Page</ScreenReaderOnly>
          </a>
        </Link>
      </ImageWrap>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  background-color: var(${ColorsEnum.white});
  border-top: 1px solid var(${ColorsEnum.gray});
`;
const ImageWrap = styled.div`
  padding: 3rem 0;
  width: 3rem;
  height: auto;
  display: block;
  margin: auto;
`;
