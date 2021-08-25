import React from 'react';
import styled from 'styled-components';
// import type { TagProps } from 'shared/types/Props';

// see https://medium.com/harrys-engineering/creating-a-typography-system-with-react-and-styled-components-ae3661369266 for code
export interface DynamicComponentProps {
  tag: React.ElementType | keyof JSX.IntrinsicElements;
  children: any;
  // 'Indexer'
  [x: string]: any;
}

const StyledDynamicComponent = styled.div``;

/**
 * The point of this dynamic component is that it can be set to any HTML element via the tag prop. So we can render a div, p, h2, etc., whatever I need.
 * @param props
 * @returns
 */
const DynamicComponent: React.FunctionComponent<DynamicComponentProps> = (
  props: DynamicComponentProps,
): JSX.Element => {
  const tag = props.tag || 'div';
  return (
    <StyledDynamicComponent {...props} as={tag}>
      {props.children}
    </StyledDynamicComponent>
  );
};

export default DynamicComponent;