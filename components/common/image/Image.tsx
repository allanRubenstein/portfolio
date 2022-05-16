import React from 'react';
import styled from 'styled-components';

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  alt: string;
  src: string;
}

const Image = (props: ImageProps): JSX.Element => {
  return <StyledImg {...props} />;
};

export default Image;

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
