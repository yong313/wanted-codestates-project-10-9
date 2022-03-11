import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import NavBar from '../common/NavBar';
import Stars from '../components/addReview/Stars';
import Input from '../common/Input';

const AddReview = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Stars />
        <Subtitle>
          <h1>제목</h1>
          <Input placeholder={'리뷰 제목을 입력해주세요'} />
        </Subtitle>
        <ReviewContent>
          <h1>내용</h1>
          <Input placeholder={'리뷰 내용을 입력해주세요'} />
        </ReviewContent>
        <Button title="리뷰 등록하기" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0 1.25rem;
`;

const Subtitle = styled.div`
  width: 100%;
  height: 5rem;
  & h1 {
    font-size: 2rem;
  }
`;

const ReviewContent = styled.div`
  width: 100%;
  height: 5rem;
  & h1 {
    font-size: 2rem;
  }
`;

export default AddReview;
