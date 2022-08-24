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

export default function useWindowSize(): UseWindowSizeReturnObj | undefined {
  const isClient = typeof window === 'object';

  function getSize() {
    // this window type stuff fixes SSR errors with NextJS
    if (typeof window !== 'undefined') {
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
        breakpoints = [
          'xSmall',
          'small',
          'medium',
          'large',
          'xLarge',
          'xxLarge',
        ];
      }

      return {
        width: isClient ? width : undefined,
        height: isClient ? height : undefined,
        breakpoint,
        breakpoints,
      };
    }

    // this is the default return if window is not defined
    return {
      width: undefined,
      height: undefined,
      breakpoint: undefined,
      breakpoints: [],
    };
  }

  const [windowSize, setWindowSize] = useState<
    UseWindowSizeReturnObj | undefined
  >();

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    // have to set state here instead of when initializing due to SSR with NextJS
    // see https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div
    setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
