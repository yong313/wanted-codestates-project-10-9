import React from 'react';
import styled from 'styled-components';

function Input(props) {
  const { placeholder, value, onChange, id = '', required = true } = props;
  return (
    <>
      <InputBox
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        required={required}
      />
    </>
  );
}

const InputBox = styled.input`
  border: none;
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid black;
  padding-left: 1rem;
`;

export default Input;
