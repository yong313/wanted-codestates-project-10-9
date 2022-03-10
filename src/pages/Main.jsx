import React from 'react';
import styled from 'styled-components';
import GridList from '../components/GridList';

export default function Main() {
  return (
    <Wrapper>
      <GridList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
