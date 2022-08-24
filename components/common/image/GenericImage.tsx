import React from 'react';
import styled from 'styled-components';

export interface GenericImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  alt: string;
  src: string;
}

const GenericImage = (props: GenericImageProps): JSX.Element => {
  return <StyledImg {...props} />;
};

export default GenericImage;

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
