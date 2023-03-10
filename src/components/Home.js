import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchImages from "../api";
import styled from "styled-components";

export default function Home() {
  const [images, setImages] = useState([]);
  const handleSearch = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <HomeStyled>
      <SearchBar onSearching={handleSearch} />
      <ImageList images={images} />
    </HomeStyled>
  );
}
const HomeStyled = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 1400px;
`;
