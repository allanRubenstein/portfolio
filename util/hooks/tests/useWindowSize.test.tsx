import useWindowSize from '../useWindowSize';
import { HookTestSetup } from './hooksJestHelpers';
import { resizeWindow } from '../../testing/testUtils';
import { BREAKPOINTS } from '../../constants';

afterEach(() => {
  resizeWindow();
});

describe('testing each width breakpoint', () => {
  test('no breakpoint (below xSmall)', () => {
    resizeWindow(100);

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual(undefined);
    expect(state.current?.breakpoints).toEqual([]);
    expect(state.current?.width).toEqual(100);
  });

  test('xSmall breakpoint', () => {
    resizeWindow('xSmall');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('xSmall');
    expect(state.current?.breakpoints).toEqual(['xSmall']);
    expect(state.current?.width).toEqual(BREAKPOINTS.xSmall);
  });

  test('small breakpoint', () => {
    resizeWindow('small');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('small');
    expect(state.current?.breakpoints).toEqual(['xSmall', 'small']);
    expect(state.current?.width).toEqual(BREAKPOINTS.small);
  });

  test('medium breakpoint', () => {
    resizeWindow('medium');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('medium');
    expect(state.current?.breakpoints).toEqual(['xSmall', 'small', 'medium']);
    expect(state.current?.width).toEqual(BREAKPOINTS.medium);
  });

  test('large breakpoint', () => {
    resizeWindow('large');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('large');
    expect(state.current?.breakpoints).toEqual([
      'xSmall',
      'small',
      'medium',
      'large',
    ]);
    expect(state.current?.width).toEqual(BREAKPOINTS.large);
  });

  test('xLarge breakpoint', () => {
    resizeWindow('xLarge');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('xLarge');
    expect(state.current?.breakpoints).toEqual([
      'xSmall',
      'small',
      'medium',
      'large',
      'xLarge',
    ]);
    expect(state.current?.width).toEqual(BREAKPOINTS.xLarge);
  });
  test('xxLarge breakpoint', () => {
    resizeWindow('xxLarge');

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('xxLarge');
    expect(state.current?.breakpoints).toEqual([
      'xSmall',
      'small',
      'medium',
      'large',
      'xLarge',
      'xxLarge',
    ]);
    expect(state.current?.width).toEqual(BREAKPOINTS.xxLarge);
  });
});

describe('number widths', () => {
  test('123 width', () => {
    resizeWindow(123);

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual(undefined);
    expect(state.current?.breakpoints).toEqual([]);
    expect(state.current?.width).toEqual(123);
  });

  test('123456 width', () => {
    resizeWindow(123456);

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('xxLarge');
    expect(state.current?.breakpoints).toEqual([
      'xSmall',
      'small',
      'medium',
      'large',
      'xLarge',
      'xxLarge',
    ]);
    expect(state.current?.width).toEqual(123456);
  });

  test('1234 width', () => {
    resizeWindow(1234);

    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.breakpoint).toEqual('large');
    expect(state.current?.breakpoints).toEqual([
      'xSmall',
      'small',
      'medium',
      'large',
    ]);
    expect(state.current?.width).toEqual(1234);
  });
});

describe('testing height', () => {
  test('500 height', () => {
    resizeWindow(100, 500);
    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.height).toEqual(500);
  });
  test('123456 height', () => {
    resizeWindow(100, 123456);
    const { state } = HookTestSetup(useWindowSize);

    expect(state.current?.height).toEqual(123456);
  });
});
