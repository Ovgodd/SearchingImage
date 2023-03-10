import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar({ onSearching }) {
  const [inputTerm, setInputTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearching(inputTerm);
  };

  const handleChange = (event) => {
    const inputUser = event.target.value;
    setInputTerm(inputUser);
  };

  return (
    <SearchBarStyled>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={inputTerm} onChange={handleChange} />
      </form>
    </SearchBarStyled>
  );
}
const SearchBarStyled = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  border-color: lightskyblue;
  border-width: 4px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
