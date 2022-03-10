import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import CommentBox from '../components/comments/CommentBox';
import ReviewDetailContent from '../components/ReviewDetailContent';

function ReviewDetail() {
  return (
    <div>
      <NavBar content="리뷰 상세보기" />
      <ReviewDetailContent />
      <CommentBox />
    </div>
  );
}

export default ReviewDetail;
