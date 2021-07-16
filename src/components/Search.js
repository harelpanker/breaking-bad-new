import { useState } from 'react';
import styled from 'styled-components';

const Search = ({ newQuery }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    newQuery(val);
  };

  return (
    <Form autoComplete='off'>
      <input
        type='text'
        autoComplete='off'
        onChange={handleChange}
        value={search}
        placeholder='Search Charecter'
      />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  input {
    width: 100%;
    border: none;
    border-radius: 25px;
    padding: 9px 12px;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
    font-size: 18px;

    :focus {
      border: 2px solid #0077c0;
      outline: none;
    }
  }
`;

export default Search;
