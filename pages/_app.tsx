// import "../styles/global.css";
import { AppProps } from 'next/app';
import 'what-input';
import { createGlobalStyle } from 'styled-components';
import { ColorsEnum } from '../components/typography/types';

export const GlobalStyle = createGlobalStyle`
  :root {
    ${ColorsEnum.redLight}: #e60000;
    ${ColorsEnum.red}: #d70000;
    ${ColorsEnum.redDark}: #940000;
    ${ColorsEnum.white}: #fff;
    ${ColorsEnum.black}: #000000;
    ${ColorsEnum.gray}: #e6e6e6;

    --transition-short: .1s;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  [data-whatintent='mouse'] *:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
