import React from 'react';
import styled from 'styled-components';
import { BiArrowBack, BiX } from 'react-icons/bi';

function NavBar({ content }) {
  return (
    <NavWrapper>
      <ButtonWrapper>
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
  width: 100%;
  height: 50px;
  padding: 0 0.4rem;
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
