import { BREAKPOINTS } from '../constants';
import { BreakpointString } from '../hooks/useWindowSize';

/**
 * Takes an x and y value and resizes the window for jest. Will have to size window at the top of the test or wrap the resize function like this in order for test to not throw an error --- await waitFor(() => {
    resizeWindow(300);
  });  
 * @param width
 * @param height 
 */
// 1024 x 768 are the jsom defaults
export const resizeWindow = (
  width: number | BreakpointString = 1024,
  height = 768,
): void => {
  let widthToUse: number | undefined = undefined;
  if (typeof width === 'number') {
    widthToUse = width;
  } else {
    switch (width) {
      case 'xSmall':
        widthToUse = BREAKPOINTS.xSmall;
        break;
      case 'small':
        widthToUse = BREAKPOINTS.small;
        break;
      case 'medium':
        widthToUse = BREAKPOINTS.medium;
        break;
      case 'large':
        widthToUse = BREAKPOINTS.large;
        break;
      case 'xLarge':
        widthToUse = BREAKPOINTS.xLarge;
        break;
      case 'xxLarge':
        widthToUse = BREAKPOINTS.xxLarge;
        break;
      default:
        widthToUse = 1024;
    }
  }
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: widthToUse,
  });

  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });

  window.dispatchEvent(new Event('resize'));
};
