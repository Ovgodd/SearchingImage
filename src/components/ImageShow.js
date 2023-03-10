import React from "react";
import styled from "styled-components";

export default function ImageShow({ image }) {
  return (
    <ImageShowStyled>
      <img src={image.urls.small} alt={image.alt_description} />
    </ImageShowStyled>
  );
}
const ImageShowStyled = styled.div`
  img {
    width: 100%;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;
