import React from 'react';
import Styled from 'styled-components';
import CommentBox from '../components/comments/CommentBox';

export default function Main() {
  return (
    <>
      <Container>
        <CommentBox />
      </Container>
    </>
  );
}

const Container = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
