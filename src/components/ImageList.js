import React from "react";
import styled from "styled-components";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <ImageListStyled>{renderedImages}</ImageListStyled>;
}
const ImageListStyled = styled.div`
  columns: 6 200px;
  column-gap: 10px;
`;
