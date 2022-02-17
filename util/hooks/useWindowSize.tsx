import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../constants';

export type BreakpointString =
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge';

export interface UseWindowSizeReturnObj {
  width: number | undefined;
  height: number | undefined;
  breakpoint: BreakpointString | undefined;
  breakpoints: BreakpointString[];
}

export default function useWindowSize(): UseWindowSizeReturnObj {
  const isClient = typeof window === 'object';

  function getSize() {
    let breakpoint: BreakpointString | undefined = undefined; // tells us specifically what breakpoint we're at
    let breakpoints: BreakpointString[] = []; // tells us all the breakpoints we've hit

    const { innerWidth: width, innerHeight: height } = window;

    if (width < BREAKPOINTS.xSmall) {
      breakpoint = undefined;
      breakpoints = [];
    } else if (width < BREAKPOINTS.small) {
      // something
      breakpoint = 'xSmall';
      breakpoints = ['xSmall'];
    } else if (width < BREAKPOINTS.medium) {
      breakpoint = 'small';
      breakpoints = ['xSmall', 'small'];
    } else if (width < BREAKPOINTS.large) {
      breakpoint = 'medium';
      breakpoints = ['xSmall', 'small', 'medium'];
    } else if (width < BREAKPOINTS.xLarge) {
      breakpoint = 'large';
      breakpoints = ['xSmall', 'small', 'medium', 'large'];
    } else if (width < BREAKPOINTS.xxLarge) {
      breakpoint = 'xLarge';
      breakpoints = ['xSmall', 'small', 'medium', 'large', 'xLarge'];
    } else {
      breakpoint = 'xxLarge';
      breakpoints = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge'];
    }

    return {
      width: isClient ? width : undefined,
      height: isClient ? height : undefined,
      breakpoint,
      breakpoints,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
