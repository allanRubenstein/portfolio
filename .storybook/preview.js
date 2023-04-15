import { GlobalStyle } from './../pages/_app';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Modal from 'react-modal';
export const parameters = {
  nextRouter: {
    // Provider: AppRouterContext.Provider, // next 13 next 13 (using next/navigation)
    Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
    pathname: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration,
    //   can override any method in the router
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
// needed for react-modal
// TODO: do one of these for tests
const mainDiv = document.getElementById('main');
if (mainDiv) {
  Modal.setAppElement('#main');
}

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ),
});
