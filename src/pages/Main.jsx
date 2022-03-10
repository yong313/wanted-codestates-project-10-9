import React from 'react';
import Styled from 'styled-components';
import CommentBox from '../components/comments/CommentBox';

import styled from 'styled-components';
import GridList from '../components/GridList';
import Sort from '../components/main/Sort';
import MoveToTopBtn from '../components/MoveToTopBtn';
export default function Main() {
  return (
    <Wrapper>
      <Sort />
      <GridList />
      <MoveToTopBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
