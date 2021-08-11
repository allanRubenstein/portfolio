// import "../styles/global.css";
import { AppProps } from 'next/app';
import 'what-input';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
