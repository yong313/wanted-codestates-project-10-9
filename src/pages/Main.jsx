import React from 'react';

import styled from 'styled-components';
import GridList from '../components/GridList';
import Sort from '../components/main/Sort';
export default function Main() {
  return (
    <Wrapper>
    <Sort />
      <GridList />
    </Wrapper>



  );
}

const Wrapper = styled.div`
  width: 100%;
  position:relative;
`;
