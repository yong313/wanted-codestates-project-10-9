import React from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import ReviewDetailContent from '../components/ReviewDetailContent';

function ReviewDetail() {
  return (
    <div>
      <NavBar content="리뷰 상세보기" />
      <ReviewDetailContent />
    </div>
  );
}

export default ReviewDetail;
