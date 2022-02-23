import React from 'react';
import styled from 'styled-components';

export interface ScreenReaderOnlyProps {
  children?: string | React.ReactNode;
}

const ScreenReaderOnly: React.FunctionComponent<ScreenReaderOnlyProps> = ({
  children,
}: ScreenReaderOnlyProps) => {
  return <ScreenReaderOnlyWrap>{children}</ScreenReaderOnlyWrap>;
};

export default ScreenReaderOnly;

const ScreenReaderOnlyWrap = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
