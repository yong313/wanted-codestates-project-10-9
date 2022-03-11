import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export default function MoveToTopBtn() {
  const clickHandler = () => {
    console.log('click');
    window.scrollTo(0, 0);
  };
  return (
    <Button onClick={clickHandler}>
      <IoIosArrowUp />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 2.8125rem;
  width: 3.125rem;
  height: 3.125rem;
  margin-left: 2.8125rem;
  background-color: #efefef;
  border-radius: 0.3125rem;
  font-size: 2rem;
  color: #fff;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
`;
