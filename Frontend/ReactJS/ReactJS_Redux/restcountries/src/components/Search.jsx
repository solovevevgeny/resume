import React from 'react'

import {IoSearch} from "react-icons/io5"

const InputContainer = styled.label``;
const Input = styled.input.attrs()``;


export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch />
        <Input onChange={(e) => setSearch(e.target.value) } value={search} />
    </InputContainer>
  )
}
