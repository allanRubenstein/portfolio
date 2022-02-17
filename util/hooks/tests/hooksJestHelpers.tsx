import React from 'react';
import { render } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';

export interface HookTestState<T> {
  state: {
    current: T | undefined;
  };
  renderResult: RenderResult;
}
export function HookTestSetup<T>(hook: () => T): HookTestState<T> {
  const state: {
    current: T | undefined;
  } = { current: undefined };

  const TestComponent = () => {
    state.current = hook();
    return null;
  };

  const renderResult = render(<TestComponent />);

  return { state, renderResult };
}
