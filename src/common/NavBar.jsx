import React from 'react';
import styled from 'styled-components';
import { BiArrowBack, BiX } from 'react-icons/bi';

function NavBar({ content, onClickHandler }) {
  return (
    <NavWrapper>
      <ButtonWrapper onClick={onClickHandler}>
        <BiArrowBack style={{ width: '100%', height: '100%' }} />
      </ButtonWrapper>
      <NavTitle>{content}</NavTitle>
      <ButtonWrapper>
        <BiX style={{ width: '100%', height: '100%' }} />
      </ButtonWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 3px #ccc;
  z-index: 99;
  width: 100%;
  max-width: 500px;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  // border-bottom: 1px solid black;
`;
const NavTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const ButtonWrapper = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;

export default NavBar;
